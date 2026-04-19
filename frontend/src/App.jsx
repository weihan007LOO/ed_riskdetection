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
    } catch (err) {
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

  useEffect(() => {
  const fetchLabels = async () => {
    const map = await loadQuestionBank();
    setLabelMap(map);
  };

  fetchLabels();
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
    q.id.startsWith("med") || q.id.startsWith("como")
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

  // const [selectedModules, setSelectedModules] = useState([]); // Removed as it's not used in the new flow logic

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
              src="/PainScore.png"
              alt="range illustration"
              style={{ marginTop: '10px', maxWidth: '90%', height: 'auto' }}
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
  const groupByTag = (questions) => {
  const grouped = {};

  questions.forEach(q => {
    const key = q.tag || "general";

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(q);
  });

  return grouped;
};
  // const groupedQuestions = groupByTag(visibleQuestions); // Unused
  
  const hasTagQuestions = (tag, complaint) => {
    return visibleQuestions.some(q =>
      q.tag === tag && q.complaint === complaint
    );
  };

  const buildFlow = (complaints) => {
    const flow = [];

    complaints.forEach((c) => {

      flow.push({ type: "general", complaint: c });

      if (hasTagQuestions("module1", c))
        flow.push({ type: "module1", complaint: c });

      if (hasTagQuestions("module2", c))
        flow.push({ type: "module2", complaint: c });

      if (hasTagQuestions("module3", c))
        flow.push({ type: "module3", complaint: c });

      if (hasTagQuestions("module4", c))
        flow.push({ type: "module4", complaint: c });

      if (hasTagQuestions("module5", c))
        flow.push({ type: "module5", complaint: c });

      if (hasTagQuestions("module6", c))
        flow.push({ type: "module6", complaint: c });
    });

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
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
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
              onClick={() => {
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
          </div></div>
      )}

      {/* STEP 3 (DYNAMIC FLOW) */}
      {step === 3 && questionFlow.length > 0 && (() => {
        const current = questionFlow[flowIndex];

        if (!current) return null;

        const goNext = () => {
          if (flowIndex + 1 < questionFlow.length) {
            setFlowIndex(flowIndex + 1);
          } else {
            goToStep(8);
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        };

        const goBack = () => {
          if (flowIndex === 0) {
            setStep(2);
          } else {
            setFlowIndex(flowIndex - 1);
          }
        };

        const questionsToRender = visibleQuestions.filter(q => {
          // 🔥 Medical & Social = combined (no complaint filter)
          if (current.type === "medical" || current.type === "social") {
            return q.tag === current.type;
          }

          // 🔥 Others = per complaint
          return (
            q.tag === current.type &&
            q.complaint === current.complaint
          );
        });

        return (
          <div className="step2main-style">
            <button onClick={goBack} className="step2back-button">← Back</button>

            <div className="step2title-style">

              <h3>
                {current.type.toUpperCase()}
              </h3>

              {renderQuestions(questionsToRender)}

              <button onClick={goNext} className="step2submit-button">
                Next
              </button>

            </div>
          </div>
        );
      })()}

      {/* STEP 8 */}
      {step === 8 && (
        <div className="step2main-style">
          <button onClick={() => {setStep(3); setFlowIndex(questionFlow.length - 1);}} className="step2back-button" > ← Back</button>
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