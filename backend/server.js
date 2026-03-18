const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// --- AI CONFIGURATION ---
// Replace with your actual key from https://aistudio.google.com/app/apikey
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", generationConfig: { responseMimeType: "application/json" }});

// --- DATABASE SETUP ---
const db = new sqlite3.Database('./triage.db', (err) => {
    if (err) console.error(err.message);
    console.log('Database Connected.');
});

// Re-create table with AI columns
db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    complaints TEXT,
    details TEXT,
    ai_summary TEXT,
    triage_zone TEXT,
    red_flag TEXT,
    final_notes_raw TEXT,
    final_notes_ai TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// --- ROUTES ---
const { checkHardRules } = require('./triageRules.js'); 
//const { checkHardRules } = require('./dummyRules.js');

app.post('/api/save', async (req, res) => {
    const { complaints, history } = req.body;
    // Unified variable to hold the result from either Rules or Gemini
    let finalTriage; 

    console.log("\n--- [START] New Triage Processing ---");
    console.log("Step 1: Data Received");
    let notesSummary = "No additional notes provided.";
    const patientFinalNote = history.p_final_notes || "";

    try {
        // We clone history and remove the notes so the main AI summary doesn't use them
        const clinicalHistoryOnly = { ...history };
        delete clinicalHistoryOnly.p_final_notes;

        // --- STEP 1: CHECK HARD RULES ---
        console.log("Step 2: Checking Medical Safety Rules...");
        const ruleResult = checkHardRules(complaints, history);

        if (ruleResult) {
            console.log("🚨 Rule Triggered:", ruleResult.zone);
            finalTriage = ruleResult; 
            redFlagStatus = "Yes";
        } else {
            // --- STEP 2: CALL GEMINI ---
            console.log("Step 3: No Red Flags found. Sending to Gemini...");
            
            const prompt = `
                You are a medical triage system.
                Analyze: ${complaints.join(", ")}
                Data: ${JSON.stringify(history)}

                TASK:
                1. Categorize as RED, YELLOW, or GREEN.
                2. Write a 2-sentence summary.

                IMPORTANT: Return ONLY a raw JSON object. No markdown, no backticks.
                Example: {"zone": "GREEN", "summary": "Patient is stable."}
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            let text = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
            
            // Parse and assign to finalTriage
            finalTriage = JSON.parse(text);
            redFlagStatus = "No";
            console.log("Step 4: AI Result Generated ->", finalTriage.zone);
        }
        
        // --- SUMMARIZING ADDITIONAL NOTES ---
        if (patientFinalNote.trim()) {
            console.log("XTRA STEP: Summarizing Final Notes separately...");
            const notesPrompt = `
                Summarize the following patient comments for a doctor in one concise sentence:
                "${patientFinalNote}"
                Return ONLY JSON: {"summary": "..."}
            `;
            const notesResult = await model.generateContent(notesPrompt);
            let notesText = (await notesResult.response).text().replace(/```json/g, '').replace(/```/g, '').trim();
            const notesJson = JSON.parse(notesText);
            notesSummary = notesJson.summary;
        }

        // --- STEP 3: DATABASE STORAGE ---
        console.log("Step 5: Writing to database...");
        const query = `INSERT INTO submissions (complaints, details, ai_summary, triage_zone, red_flag, final_notes_raw, final_notes_ai) VALUES (?, ?, ?, ?,?,?,?)`;
        const redFlagValue = ruleResult ? "Yes" : "No";
        // Use finalTriage for both columns
        db.run(query, [
            JSON.stringify(complaints),
            JSON.stringify(history),
            finalTriage.summary || "No summary",
            finalTriage.zone || "UNKNOWN",
            redFlagValue,
            patientFinalNote,
            notesSummary
        ], function(err) {
            if (err) {
                console.error("DB Error:", err.message);
                return res.status(500).json({ error: "Database save failed" });
            }
            console.log("Step 6: Saved with ID:", this.lastID);
            res.json({ success: true, triage: finalTriage }); 
        });

    } catch (error) {
        console.error("❌ Error Details:", error.message);

        const fallbackResponse = { 
            zone: "PENDING", 
            summary: error.message.includes("429") ? "Quota hit. Manual triage required." : "System Error." 
        };

        db.run(`INSERT INTO submissions (complaints, details, ai_summary, triage_zone, red_flag) VALUES (?, ?, ?, ?)`, 
            [JSON.stringify(complaints), JSON.stringify(history), fallbackResponse.summary, fallbackResponse.zone],
            () => res.status(500).json({ error: "Processing failed", details: fallbackResponse })
        );
    }
});

// View data route
app.get('/api/view', (req, res) => {
    db.all("SELECT * FROM submissions ORDER BY created_at DESC", (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0',() => {
    console.log(`\n🚀 Server is running!`);
    console.log(`🔗 Click to view database: http://localhost:${PORT}/api/view`);
    console.log(`🏥 Backend is ready to receive data from React on port ${PORT}\n`);
    console.log(`🌐 Network access: http://<YOUR-IP>:${PORT}/api/view`);
});