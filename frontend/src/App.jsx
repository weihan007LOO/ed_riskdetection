import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ChiefComplaints } from './questionBank/chiefComplaints';

import MedicalCheckboxGroup from './components/MedicalCheckboxGroup';
import MedicalRadioGroup from './components/MedicalRadioGroup';
import MedicalTextInput from './components/MedicalTextInput';
import MedicalDateInput from './components/MedicalDateInput';
import MedicalNumberInput from './components/MedicalNumberInput';
import MedicalToggle from './components/MedicalToggle';
import MedicalColour from './components/MedicalColour';
import AbdomenMap1 from './components/AbdomenMap1';
import HeadMap from './components/HeadMap.jsx';
import BodyMap from './components/SilhoutteMap';
import ChestMap from './components/ChestMap';

import WelcomePage from './pages/WelcomePage'; 
import DetailPage from './pages/DetailPage';

import {
  Wind,
  Activity,
  Brain,
  Droplets,
  Zap,
  Thermometer,
  FlaskConical,
  Eye,
  Headphones,
  HeartPulse,
  Sparkles,
  AlertTriangle,
  Baby,
  Pill,
  Ear,
  LayoutGrid
} from "lucide-react";

import { getQuestionsForComplaint, buildQuestions } from './questionBank/index.js';
import { loadQuestionBank } from './questionBank/helpers/loadQuestionBank.js';


function App() {
  const [step, setStep] = useState(0);
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [allAnswers, setAllAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [labelMap, setLabelMap] = useState({});
  const [questionFlow, setQuestionFlow] = useState([]);
  const [flowIndex, setFlowIndex] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [confirmQuestions, setConfirmQuestions] = useState([]);
  const [confirmAnswers, setConfirmAnswers] = useState({});

  // ✅ CLEAN speech logic (unchanged)
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Web Speech API is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsRecording(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const currentText = allAnswers['p_final_notes'] || "";
      updateAnswer('p_final_notes', currentText + " " + transcript);
    };

    recognition.onend = () => setIsRecording(false);

    isRecording ? recognition.stop() : recognition.start();
  };

  const handleFinalSubmit = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/sync/history`, {
        id: allAnswers.id || "RN00000000",
        complaints: selectedComplaints,
        details: allAnswers,
        final_notes_raw: allAnswers.p_final_notes || "",
      },
        {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY
        }
      });
      alert("Saved!");
      window.location.reload();
    } catch (err){
      console.error("ERROR:", err.response?.data);
      alert("Backend error");
    }

    setLoading(false);
  };

  // =========================
  // ✅ PAGINATION (UNCHANGED)
  // =========================
  const complaintsList = ChiefComplaints;
  const [complaintPage, setComplaintPage] = useState(0);
  const [ITEMS_PER_PAGE, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth <= 480 ? 5 : 11);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
  const fetchLabels = async () => {
    const map = await loadQuestionBank();
    setLabelMap(map);
  };

  fetchLabels();
}, []);

  const startIndex = complaintPage * ITEMS_PER_PAGE;
  const remainingItems = complaintsList.length - startIndex;
  const isFirstPage = complaintPage === 0;
  const isMobile = window.innerWidth <= 480;
  let pageSize = ITEMS_PER_PAGE;

  // MOBILE LOGIC ONLY
  if (isMobile) {
    if (isFirstPage) {
      pageSize = 5;
    } else if (remainingItems <= 5) {
      pageSize = 5; // last page
    } else {
      pageSize = 4; // middle pages
    }
  }

  const currentItems = complaintsList.slice(
    startIndex,
    startIndex + pageSize
  );

  const hasNextPage = startIndex + ITEMS_PER_PAGE < complaintsList.length;
  const hasPrevPage = complaintPage > 0;

  const toggleComplaint = (name) => {
    setSelectedComplaints(prev =>
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  const updateAnswer = (id, value) => {
    setAllAnswers(prev => ({ ...prev, [id]: value }));
  };

  // =========================
  // ❌ REMOVED OLD LOGIC
  // =========================
  // ❌ currentComplaintIndex
  // ❌ handleNextAction
  // ❌ isLastComplaint

  // =========================
  // ✅ QUESTIONS PIPELINE
  // =========================
  const allQuestions = getQuestionsForComplaint({
    ...allAnswers,
    chiefComplaints: selectedComplaints
  });

  const visibleQuestionsRaw = buildQuestions(allQuestions, {
    ...allAnswers,
    chiefComplaints: selectedComplaints
  });

  const visibleQuestions = visibleQuestionsRaw.map(q => ({
    ...q,
    label: labelMap[q.id] || "Missing question"
  }));


  const medicalHistoryQuestions = visibleQuestions.filter(q =>
    q.id.startsWith("med")
  );

  const socialHistoryQuestions = visibleQuestions.filter(q =>
    q.id.startsWith("soc")
  );

  const moduleMeta = {
    resp: { title: "Respiratory", icon: Wind, color: "#e0f2fe" },
    gi: { title: "Gastrointestinal", icon: Activity, color: "#fef3c7" },
    neuro: { title: "Neurological", icon: Brain, color: "#ede9fe" },
    skin: { title: "Skin", icon: Droplets, color: "#ffe4e6" },
    pain: { title: "Pain", icon: Zap, color: "#fee2e2" },
    systemic: { title: "General", icon: Thermometer, color: "#ecfdf5" },
    urinary: { title: "Urinary", icon: FlaskConical, color: "#e0f7fa" },
    eye: { title: "Eye", icon: Eye, color: "#f0f9ff" },
    head: { title: "Head", icon: Headphones, color: "#fef2f2" },
    chest: { title: "Chest", icon: HeartPulse, color: "#ffe4e6" },
    dizziness: { title: "Dizziness", icon: Sparkles, color: "#f5f3ff" },
    syncope: { title: "Syncope", icon: AlertTriangle, color: "#fff7ed" },
    gyn: { title: "Gynaecology", icon: Baby, color: "#fdf4ff" },
    nausea: { title: "Nausea/Vomiting", icon: Pill, color: "#fef9c3" },
    ent: { title: "ENT", icon: Ear, color: "#f1f5f9" },
    other: { title: "Other", icon: LayoutGrid, color: "#e2e8f0" }
  };

  const [selectedModules, setSelectedModules] = useState([]);

  const toggleModule = (moduleKey) => {
    setSelectedModules(prev =>
      prev.includes(moduleKey)
        ? prev.filter(m => m !== moduleKey)
        : [...prev, moduleKey]
    );
  };

  // =========================
  // ✅ MOVED OUTSIDE JSX (FIX)
  // =========================
  const renderQuestions = (questions) => (
    questions.map(q => (
      <div key={q.id} className="step2question-id">
        <label className={`step2question-que ${step === 5 ? "step5-que" : ""}`}>{q.label}</label>

        {q.type === 'text' && (
          <MedicalTextInput
            value={allAnswers[q.id]}
            onChange={(val) => updateAnswer(q.id, val)}
            isMobile={isMobile} 
          />
        )}

        {q.type === 'date' && (
          <MedicalDateInput 
            value={allAnswers[q.id]} 
            onChange={(val) => updateAnswer(q.id, val)}
            isMobile={isMobile} 
          />
        )}

        {q.type === 'long_text' && (
          <MedicalTextInput 
            isTextArea={true}
            placeholder="Provide more details..."
            value={allAnswers[q.id]}
            onChange={(val) => updateAnswer(q.id, val)}
          />
        )}

        {q.type === 'number' && (
          <MedicalNumberInput
            value={allAnswers[q.id]}
            onChange={(val) => updateAnswer(q.id, val)}
            isMobile={isMobile}
          />
        )}

        {q.type === 'yes_no_toggle' && (
          <MedicalToggle
            value={allAnswers[q.id]}
            onValueChange={(val) => updateAnswer(q.id, val)}
            showTextInput={q.hasExtraInput}
            extraText={allAnswers[q.id + '_details']}
            onTextChange={(val) => updateAnswer(q.id + '_details', val)}
            isMobile={isMobile}
          />
        )}

        {q.type === 'radio_group' && (
          <MedicalRadioGroup
            options={q.options}
            selectedOption={allAnswers[q.id]}
            onChange={(val) => updateAnswer(q.id, val)}
            isMobile={isMobile}
          />
        )}

        {q.type === 'range' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
            <input type="range" min="0" max="10" style={{ width: '80%' }} onChange={(e) => updateAnswer(q.id, e.target.value)} />
            <span style={{ fontWeight: '600', color: '#10b981', marginTop: '8px', fontSize: '16px' }}>{allAnswers[q.id] || 5} / 10</span>
            <img
              src="/PainScore.PNG"
              alt="pain score illustration"
              style={{ marginTop: '12px', maxWidth: '90%', height: 'auto' }}
            />
          </div>
        )}

        {q.type === 'checkbox_group' && (
          <MedicalCheckboxGroup
            options={q.options}
            selectedOptions={allAnswers[q.id] || []}
            onChange={(val) => updateAnswer(q.id, val)}
          />
        )}

        {q.type === 'body_map' && (
          <BodyMap
            selectedRegion={allAnswers[q.id]}
            onSelect={(val) => updateAnswer(q.id, val)}
          />
        )}

        {q.type === 'abdomen_map' && (
          <AbdomenMap1 
            onSelect={(region) => updateAnswer(q.id, region)} 
            selectedRegion={allAnswers[q.id]} 
            isMobile={isMobile} 
          />
        )}

        {q.type === 'head_map' && (
          <HeadMap 
            onSelect={(region) => updateAnswer(q.id, region)} 
            selectedRegion={allAnswers[q.id]} 
          />
        )}

        {q.type === 'chest_map' && (
          <ChestMap 
            onSelect={(region) => updateAnswer(q.id, region)} 
            selectedRegion={allAnswers[q.id]} 
          />
        )}

        {q.type === 'colour' && (
          <MedicalColour 
            options={q.options} 
            selectedOption={allAnswers[q.id]} 
            onChange={(val) => updateAnswer(q.id, val)}
            type={q.colourType}   // <-- pass this prop
            isMobile={isMobile} 
          />
        )}
      </div>
    ))
  );

  const goToStep = (nextStep) => {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // smooth scroll optional
  };

  const stepBackgrounds = {
    0: "#f8fafc",
    1: "#f8fafc",
    2: "#f8fafc",
    3: "#f8fafc",
    4: "#f8fafc",
    5: "#f8fafc",
    6: "#f8fafc",
    7: "#f8fafc",
    8: "#f8fafc",
  };
  const groupByTag = (questions) => {
  const grouped = {};

  questions.forEach(q => {
    const key = q.tag || "general";

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(q);
  });

  return grouped;
};
  const groupedQuestions = groupByTag(visibleQuestions);
  
  const hasTagQuestions = (tag, complaint) => {
    return visibleQuestions.some(q =>
      q.tag === tag && q.complaint === complaint
    );
  };

  const buildFlow = (complaints) => {
    const flow = [];

    if (hasTagQuestions("comorbid", "global")) {
        flow.push({ type: "comorbid", complaint: "global" });
      }
    
    if (hasTagQuestions("general", "global")) {
        flow.push({ type: "general", complaint: "global" });
      }

    // ✅ Modules (GLOBAL — only once)
    for (let i = 1; i <= 10; i++) {
      const tag = `module${i}`;
      if (hasTagQuestions(tag, "global")) {
        flow.push({ type: tag, complaint: "global" });
      }
    }

      // 🔥 Combined sections ONLY ONCE
      if (hasTagQuestions("medical", "global")) {
        flow.push({ type: "medical", complaint: "global" });
      }

      if (hasTagQuestions("social", "global")) {
        flow.push({ type: "social", complaint: "global" });
      }

    return flow;
  };


  // =========================
  // ✅ CLEAN RETURN
  // =========================
  return (
    <div className={`main-app-container padding-step-${step} ${step === 2 ? 'fixed-height' : ''}`}
      style={{
        backgroundColor: stepBackgrounds[step],
        transition: "background-color 0.3s ease"
      }}
    >
      
      {/* HEADER SECTION */}
      {(step === 0 || step === 2) && (
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img 
            src="/ailogo.png" 
            alt="AI Logo" 
            className="triage-logo" 
          />
          <h1 className="greenzonetriage-title">ED History Taking</h1>
        </div>
      )}

      {step === 0 && <WelcomePage onStart={() => setStep(1)} />}

      {step === 1 && (
        <DetailPage
          allAnswers={allAnswers}
          updateAnswer={updateAnswer}
          onNext={() => goToStep(2)}
        />
      )}

      {/* STEP 2: CHIEF COMPLAINT SELECTION */}
      {step === 2 && (
        <div className="step2main-style">
          <button onClick={() => setStep(1)} className="btn-secondary">← Back</button>
          <div className="step1main-style">
            <h3>Select Chief Complaints</h3>
            <p style={{ marginBottom: '0' }}>Please select all that apply to you</p>
            
            <div className="step1complain-container">
              {/* Previous page button */}
              {hasPrevPage && (
                <button 
                  onClick={() => setComplaintPage(prev => prev - 1)}
                  className="step1complain-button nav-card"
                >
                  ⬅️
                  <span>Back</span>
                </button>
              )}
              
              {/* Chief complaint buttons */}
              {currentItems.map(({ name, icon: Icon }) => (
                <button 
                  key={name} 
                  onClick={() => toggleComplaint(name)} 
                  className={`step1complain-button ${selectedComplaints.includes(name) ? 'selectedComplaints' : ''}`}
                >
                  <Icon size={28} style={{ marginBottom: '8px', color: selectedComplaints.includes(name) ? '#10b981' : '#64748b' }} />
                  <span>{name}</span>
                </button>
              ))}
              
              {/* Next page button */}
              {hasNextPage && (
                <button 
                  onClick={() => setComplaintPage(prev => prev + 1)}
                  className="step1complain-button nav-card"
                >
                  ➡️
                  <span>More</span>
                </button>
              )}
            </div>

            {/* Start Assessment button */}
            <button 
              onClick={() => {
                const allQs = visibleQuestions.filter(q =>
                  q.id.startsWith("confirm")
                );

                if (allQs.length > 0) {
                  setConfirmQuestions(allQs);
                  setConfirmAnswers({});
                  goToStep(2.5); // 👈 NEW STEP
                  return;
                }

                const flow = buildFlow(selectedComplaints);
                setQuestionFlow(flow);
                setFlowIndex(0);
                goToStep(3);
              }}
              disabled={selectedComplaints.length === 0}
              className="step1complain-submit"
            >
              Start Assessment ({selectedComplaints.length})
            </button>
          </div>
        </div>
      )}

      {/* STEP 2.5 - CONFIRM QUESTIONS */}
      {step === 2.5 && (
        <div className="step2main-style">
          <button onClick={() => setStep(2)} className="btn-secondary">
            ← Back
          </button>

          <div className="step2title-style">
            <h3>Confirm Symptoms</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {confirmQuestions.map(q => (
                <div key={q.id} className="step2question-id">
                  <label className="step2question-que">{q.label}</label>

                  <MedicalRadioGroup
                    options={["Remove", "Proceed"]}
                    selectedOption={confirmAnswers[q.id]}
                    onChange={(val) => {
                      setConfirmAnswers(prev => ({ ...prev, [q.id]: val }));
                      updateAnswer(q.id, val);
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              className="step2submit-button"
              onClick={() => {
                const hasProceed = Object.values(confirmAnswers).some(v => v === "Proceed");

                if (!hasProceed) {
                  setStep(2); // ❌ back to complaints
                  return;
                }

                // ✅ continue normal flow
                const flow = buildFlow(selectedComplaints);
                setQuestionFlow(flow);
                setFlowIndex(0);
                goToStep(3);
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && questionFlow.length > 0 && (() => {
        const current = questionFlow[flowIndex];

        if (!current) return null;

        const goNext = () => {
          setDirection("forward");
          if (flowIndex + 1 < questionFlow.length) {
            setFlowIndex(flowIndex + 1);
          } else {
            goToStep(8);
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        };

        const goBack = () => {
          let newIndex = flowIndex - 1;

          while (newIndex >= 0) {
            const prev = questionFlow[newIndex];

            const hasQuestions = visibleQuestions.some(q =>
              (prev.type === "medical" || prev.type === "social" || prev.type === "comorbid")
                ? q.tag === prev.type
                : q.tag === prev.type && q.complaint === prev.complaint
            );

            if (hasQuestions) break;
            newIndex--;
          }

          if (newIndex < 0) setStep(2);
          else setFlowIndex(newIndex);
        };

        // STEP FILTER
        const questionsToRender = visibleQuestions.filter(q => {
          if (q.id.startsWith("confirm")) return false;
          if (
            current.type === "medical" ||
            current.type === "social" ||
            current.type === "comorbid"
          ) {
            return q.tag === current.type;
          }

          return (
            q.tag === current.type &&
            q.complaint === current.complaint
          );
        });

        if (questionsToRender.length === 0 && direction === "forward") {
          goNext();
          return null;
        }

        const sectionMeta =
          moduleMeta[current.type] || {
            title: current.type.charAt(0).toUpperCase() + current.type.slice(1),
            icon: LayoutGrid,
            color: "#e2e8f0"
          };

        const IconComponent = sectionMeta.icon;
        const sectionTitle =
          current.type.charAt(0).toUpperCase() + current.type.slice(1);

        // ✅ IMPORTANT RULE:
        // only general + moduleX use cards
        const useCards =
          current.type === "general" ||
          current.type.startsWith("module");

        const groupedByCard = useCards
          ? questionsToRender.reduce((acc, q) => {
              const key = q.sectionTitle;

              if (!key) return acc; // no fallback, prevents "Other"

              if (!acc[key]) acc[key] = [];
              acc[key].push(q);

              return acc;
            }, {})
          : null;

        const isFlatSection =
          current.type === "comorbid" ||
          current.type === "medical" ||
          current.type === "social";

        return (
          <div className="step2main-style">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "20px" : "190px",
                marginBottom: isMobile ? "10px" : "16px",
              }}
            >
              {/* 🔙 Back */}
              <button
                onClick={goBack}
                className="btn-secondary"
                style={{ width: "auto", marginBottom: 0 }}
              >
                ← Back
              </button>

              {/* 🧠 Icon + Title */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <IconComponent size={24} style={{ color: "#2563eb" }} />
                <h3
                  style={{
                    margin: 0,
                    fontSize: isMobile ? "30px" : "30px",
                    fontWeight: "600",
                    color: "#1e293b"
                  }}
                >
                  {sectionTitle}
                </h3>
              </div>
            </div>

            <div className={isFlatSection ?"step2title-xstyle": "step2title-style"}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "5px",
                  justifyContent: "center"
                }}
              >
                
              </div>

              {/* ✅ FLAT (comorbid / medical / social) */}
              {!useCards && (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {renderQuestions(questionsToRender)}
                </div>
              )}

              {/* ✅ CARDS (general + modules only) */}
              {useCards &&
                Object.entries(groupedByCard || {}).map(([cardTitle, questions]) => (
                  <div
                    key={cardTitle}
                    style={{
                      marginBottom: isMobile ? "25px" : "20px",
                      textAlign: "left",
                      backgroundColor: "#f5f9ff",
                      //border: "2px solid #dbeafe",
                      border: "1px solid #000000",
                      borderLeft: "1px solid #000000",
                      //borderLeft: "5px solid #2563eb",
                      //borderLeft: "2px solid #dbeafe",
                      borderRadius: "14px",
                      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
                      overflow: "hidden" // IMPORTANT: keeps title flush with card
                    }}
                  >
                    {/* 🔷 TITLE CONTAINER (like Flutter header container) */}
                    <div
                      style={{
                        //background: "linear-gradient(90deg, #1342b1,  #2e70ec, #1342b1)",
                        background: "linear-gradient(90deg, #2e70ec,  #1342b1, #2e70ec)",
                        //background: "linear-gradient(90deg, #99b7f9,  #dbeafe, #95b2f1)",
                        padding: "12px 16px 0px 16px",
                        borderBottom: "1px solid #bfdbfe",
                        textAlign: "center"
                      }}
                    >
                      <h4
                        style={{
                          margin: 0,
                          fontSize: isMobile ? "22px" : "26px",
                          fontWeight: "600",
                          color: "#ffffff"
                        }}
                      >
                        {cardTitle}
                      </h4>
                    </div>

                    {/* 🧾 QUESTIONS */}
                    <div style={{ padding: "12px 16px" }}>
                      {renderQuestions(questions)}
                    </div>
                  </div>
                ))}

                      <button onClick={goNext} className="step2submit-button">
                        Next →
                      </button>
                    </div>
                  </div>
                );
              })()}

      {/* STEP 8 - Additional Information */}
      {step === 8 && (
        <div className="step2main-style">
          <button onClick={() => {setStep(3); setFlowIndex(questionFlow.length - 1);}} className="btn-secondary" style={{ width: 'auto' }}>← Back</button>
          
          <div className="step2title-style">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', justifyContent: 'center' }}>
              <LayoutGrid size={28} style={{ color: '#2563eb' }} />
              <h3 style={{ margin: 0, fontSize: '26px', color: '#1e293b', fontWeight: '600' }}>Additional Information</h3>
            </div>

            <div className="step2question-id"> 
              <label className="step2question-que">
                Is there anything else you would like the doctor to know? (Optional)
              </label>
      
              <div style={{ position: 'relative', width: '100%' }}>
                <MedicalTextInput 
                  isTextArea={true}
                  placeholder="e.g., I have a history of heart issues, I'm currently taking aspirin, etc."
                  value={allAnswers['p_final_notes'] || ""}
                  onChange={(val) => updateAnswer('p_final_notes', val)}
                />

                <button onClick={startSpeechRecognition} className={`mic-button ${isRecording ? 'recording' : ''}`}>
                  {isRecording ? '🛑' : '🎤'}
                </button>
              </div>
            </div>

            <button 
              onClick={handleFinalSubmit} 
              disabled={loading}
              className="step2submit-button"
            >
              {loading ? "Processing..." : "Submit to Doctor →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;