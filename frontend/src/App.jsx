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

function App() {
  const [step, setStep] = useState(0);
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [allAnswers, setAllAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

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
        id: "RN12345678",
        complaints: selectedComplaints,
        details: allAnswers,
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
      setItemsPerPage(window.innerWidth <= 480 ? 5 : 8);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const startIndex = complaintPage * ITEMS_PER_PAGE;
  const currentItems = complaintsList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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

  const visibleQuestions = buildQuestions(allQuestions, {
    ...allAnswers,
    chiefComplaints: selectedComplaints
  });
  
  // ✅ FILTERS
  const mainGeneralQuestions = visibleQuestions.filter(q =>
    selectedComplaints.some(c => {
      const normalized = c.toLowerCase().replace(/\s+/g, '');
      if (q.id.startsWith(normalized)) return true;

      //Specialcase
      if (c.toLowerCase() === "fainting/blackout" && q.id.startsWith("syncopegen")) return true;
      if (c.toLowerCase() === "nausea/vomiting" && q.id.startsWith("nauseavomit")) return true;

      return false;
    })
  );


  const moduleQuestions = visibleQuestions.filter(q =>
    q.id.startsWith("gi_") ||
    q.id.startsWith("resp_") ||
    q.id.startsWith("neuro_") ||
    q.id.startsWith("skin_") ||
    q.id.startsWith("pain_") ||
    q.id.startsWith("sys_") ||
    q.id.startsWith("uri_") ||
    q.id.startsWith("eye_") ||
    q.id.startsWith("head_") ||
    q.id.startsWith("chest_") ||
    q.id.startsWith("dizzy_") ||
    q.id.startsWith("syncope_") ||
    q.id.startsWith("gyn_") ||
    q.id.startsWith("fvr_") ||
    q.id.startsWith("soc_") ||
    q.id.startsWith("nv_") ||
    q.id.startsWith("med_") ||
    q.id.startsWith("ent_")
  );

  const medicalHistoryQuestions = visibleQuestions.filter(q =>
    q.id.startsWith("medic")
  );

  const socialHistoryQuestions = visibleQuestions.filter(q =>
    q.id.startsWith("social")
  );

  const groupModuleQuestions = (questions) => {
  const groups = {};

  questions.forEach(q => {
    let key = "other";

    if (q.id.startsWith("resp_")) key = "resp";
    else if (q.id.startsWith("gi_")) key = "gi";
    else if (q.id.startsWith("neuro_")) key = "neuro";
    else if (q.id.startsWith("skin_")) key = "skin";
    else if (q.id.startsWith("pain_")) key = "pain";
    else if (q.id.startsWith("sys_")) key = "systemic";
    else if (q.id.startsWith("uri_")) key = "urinary";
    else if (q.id.startsWith("eye_")) key = "eye";
    else if (q.id.startsWith("head_")) key = "head";
    else if (q.id.startsWith("chest_")) key = "chest";
    else if (q.id.startsWith("dizzy_")) key = "dizziness";
    else if (q.id.startsWith("syncope_")) key = "syncope";
    else if (q.id.startsWith("gyn_")) key = "gyn";
    else if (q.id.startsWith("nv_")) key = "nausea";
    else if (q.id.startsWith("ent_")) key = "ent";

    if (!groups[key]) groups[key] = [];
    groups[key].push(q);
    });

    return groups;
  };

  const groupedModules = groupModuleQuestions(moduleQuestions);

  /*const moduleMeta = {
    resp: { title: "🫁 Respiratory", color: "#e0f2fe" },
    gi: { title: "🤢 Gastrointestinal", color: "#fef3c7" },
    neuro: { title: "🧠 Neurological", color: "#ede9fe" },
    skin: { title: "🩹 Skin", color: "#ffe4e6" },
    pain: { title: "⚡ Pain", color: "#fee2e2" },
    systemic: { title: "🌡️ General", color: "#ecfdf5" },
    urinary: { title: "🚽 Urinary", color: "#e0f7fa" },
    eye: { title: "👁️ Eye", color: "#f0f9ff" },
    head: { title: "🤕 Head", color: "#fef2f2" },
    chest: { title: "❤️ Chest", color: "#ffe4e6" },
    dizziness: { title: "💫 Dizziness", color: "#f5f3ff" },
    syncope: { title: "⚠️ Syncope", color: "#fff7ed" },
    gyn: { title: "👩 Gynaecology", color: "#fdf4ff" },
    nausea: { title: "🤮 Nausea/Vomiting", color: "#fef9c3" },
    other: { title: "Other", color: "#f1f5f9" }
  };*/

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

  const isMobile = window.innerWidth <= 480;

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
          />
        )}

        {q.type === 'date' && (
          <MedicalDateInput 
            value={allAnswers[q.id]} 
            onChange={(val) => updateAnswer(q.id, val)} 
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
          />
        )}

        {q.type === 'yes_no_toggle' && (
          <MedicalToggle
            value={allAnswers[q.id]}
            onValueChange={(val) => updateAnswer(q.id, val)}
            showTextInput={q.hasExtraInput}
            extraText={allAnswers[q.id + '_details']}
            onTextChange={(val) => updateAnswer(q.id + '_details', val)}
            step={step}
            isMobile={isMobile}
          />
        )}

        {q.type === 'radio_group' && (
          <MedicalRadioGroup
            options={q.options}
            selectedOption={allAnswers[q.id]}
            onChange={(val) => updateAnswer(q.id, val)}
          />
        )}

        {q.type === 'range' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
            <input type="range" min="0" max="10" style={{ width: '80%' }} onChange={(e) => updateAnswer(q.id, e.target.value)} />
              <span style={{ fontWeight: 'bold', color: '#27ae60', marginTop: '5px' }}>{allAnswers[q.id] || 5} / 10</span>
                <img
                  src="/static/PainScore.png"
                  alt="range illustration"
                  style={{ marginTop: '10px', maxWidth: '90%', height: 'auto'}}
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
          />
        )}

        {q.type === 'head_map' && (
          <HeadMap 
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
    0: "#f8fafc", //#f0f9ff"
    1: "#f8fafc",
    2: "#f8fafc",
    3: "#f8fafc",
    4: "#f8fafc",
    5: "#f8fafc",
    6: "#f8fafc",
    7: "#f8fafc",
    8: "#f8fafc",
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
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img 
            src="/static/ailogo.png" 
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
          onNext={() => setStep(2)}
        />
      )}

      {/* STEP 2: CHIEF COMPLAINT SELECTION */}
      {step === 2 && (
        <div className="step2main-style">
          <button onClick={() => setStep(1)} className="step2back-button" > ← Back</button>
        <div className="step1main-style">
          <h3>Select Chief Complaints</h3>
          <p>Please select all that apply to you</p>
          
          <div className="step1complain-container">

            {/* 🔹 Previous page button */}
            {hasPrevPage && (
              <button 
                onClick={() => setComplaintPage(prev => prev - 1)}
                className="step1complain-button nav-card"
              >
                ⬅️
                <span>Back</span>
              </button>
            )}
            
             
              {currentItems.map(({ name, icon: Icon }) => (
                <button key={name} onClick={() => toggleComplaint(name)} className={`step1complain-button ${selectedComplaints.includes(name) ? 'selectedComplaints' : ''}`}>
                  <Icon size={30} style={{ marginBottom: '6px', color: '#334155' }} />
                  <span>{name}</span>
                </button>
              ))}
             
            {/* 🔹 Chief complaint buttons */}
            {/*
            {currentItems.map(({ name, icon }) => (
              <button key={name} onClick={() => toggleComplaint(name)} className={`step1complain-button ${selectedComplaints.includes(name) ? 'selectedComplaints' : ''}`}>
                <span style={{ fontSize: '30px', marginBottom: '6px' }}>{icon}</span>
                <span>{name}</span>
              </button>
            ))}
            */}
            

            {/* 🔹 Next page button */}
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

          {/* 🔹 Start Assessment button */}
          <button 
            onClick={() => { setStep(3)}}
            disabled={selectedComplaints.length === 0}
            className="step1complain-submit"
          >
            Start Assessment ({selectedComplaints.length})
          </button>
        </div></div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="step2main-style">
          <button onClick={() => setStep(2)} className="step2back-button" > ← Back</button>
          <div className="step2title-style">
            <h3>General Questions</h3>
            <p>Please select all that apply to you</p>
          {renderQuestions(mainGeneralQuestions)}
          <button onClick={() => goToStep(4)} className={`step2submit-button`}>Next</button>
          </div>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="step2main-style">
          <button onClick={() => setStep(3)} className="step2back-button" > ← Back</button>
          <div className="step2title-style">
            <h3>Associated Symptoms</h3>
            <p>Now, we will ask about other symptoms you may have WITH this current illness. Please only include symptoms that started around the same time</p>
          <div className="step1complain-container">
            {Object.entries(groupedModules).map(([key]) => {
              const meta = moduleMeta[key] || moduleMeta.other;
              const Icon = meta.icon;

              return (
                <button
                  key={key}
                  onClick={() => toggleModule(key)}
                  className={`step1complain-button ${
                    selectedModules.includes(key) ? 'selectedComplaints' : ''
                  }`}
                >
                  <Icon size={30} style={{ marginBottom: '6px', color: '#334155' }} />
                  <span>{meta.title}</span>
                </button>
              );
            })}
          </div>
          <button onClick={() => goToStep(5)} disabled={selectedModules.length === 0} className={`step2submit-button`}>Next</button>
          </div>
        </div>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <div className="step2main-style">
          <button onClick={() => goToStep(4)} className="step2back-button" > ← Back</button>
          <div className="step2title-style">
            <h3>Associated Symptoms</h3>
            <p>Now, we will ask about other symptoms you may have WITH this current illness. Please only include symptoms that started around the same time</p>
          </div>

          <div style={{ padding: "0px 3px" }}>
          {Object.entries(groupedModules).filter(([key]) => selectedModules.includes(key)).map(([key, questions]) => {
              const meta = moduleMeta[key] || moduleMeta.other;
              const Icon = meta.icon;

              return (
                <div 
                  key={key}
                  className="module-card"
                >
                  <h4 style={{ 
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                    color: "#1e293b",
                    fontSize: "16px",
                    fontWeight: "600"
                  }}>
                    <Icon size={18} strokeWidth={1.5} style={{ color: "#64748b" }} />
                    {meta.title}
                  </h4>
                  {/*<h4 style={{ marginBottom: "10px", color: "black", fontSize: "20px"}}>{meta.title}</h4>*/}

                  {/* ✅ Divider line */}
                  <div
                    style={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#e5e7eb",
                      marginBottom: "15px"
                    }}
                  />

                  {renderQuestions(questions)}
                </div>
              );
            })}
          <button onClick={() => goToStep(6)} className={`step2submit-button`}>Next</button>
          </div>
        </div>
      )}

      {/* STEP 6 */}
      {step === 6 && (
        <div className="step2main-style">
          <button onClick={() => setStep(5)} className="step2back-button" > ← Back</button>
          <div className="step2title-style">
            <h3>Medical History</h3>
            <p>Please select all that apply to you</p>
          {renderQuestions(medicalHistoryQuestions)}
          <button onClick={() => goToStep(7)} className={`step2submit-button`}>Next</button>
          </div>
        </div>
      )}

      {/* STEP 7 */}
      {step === 7 && (
        <div className="step2main-style">
          <button onClick={() => setStep(6)} className="step2back-button" > ← Back</button>
          <div className="step2title-style">
            <h3>Social History</h3>
            <p>Please select all that apply to you</p>
          {renderQuestions(socialHistoryQuestions)}
          <button onClick={() => goToStep(8)} className={`step2submit-button`}>Next</button>
          </div>
        </div>
      )}

      {/* STEP 8 */}
      {step === 8 && (
        <div className="step2main-style">
          <button onClick={() => setStep(7)} className="step2back-button" > ← Back</button>
          <div className="step2title-style">
          <h3>Additional Information</h3>

            <div className="step2question-id"> 
              <label className="step2question-que">
                Is there anything else you would like the doctor to know? (Optional)
              </label>
      
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '600px', // Matches your usual center width
              margin: '10px auto' 
            }}>
                        
          <MedicalTextInput 
            isTextArea={true}
            placeholder="e.g., I have a history of heart issues, I'm currently taking aspirin, etc."
            value={allAnswers['p_final_notes'] || ""}
            onChange={(val) => updateAnswer('p_final_notes', val)}
          />

          <button onClick={startSpeechRecognition} className={`mic-button ${isRecording ? 'recording' : ''}`}
            style={{
              position: 'absolute',
              right: '0px',
              bottom: '0px',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              border: '1px solid #ddd',
              backgroundColor: isRecording ? '#e74c3c' : '#f1f1f1',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              zIndex: 999,
          }}> {isRecording ? '🛑' : '🎤'}       
          </button>  
            </div>
          </div>
        </div>
          <button 
            onClick={handleFinalSubmit} 
            disabled={loading}
            className={`step2submit-button`}
          >
            {loading ? "Processing..." : "Submit to Doctor →"}
          </button>
            </div>
        )}
    </div>
  );
}

export default App;