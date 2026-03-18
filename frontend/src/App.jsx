import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { QuestionBank } from './QuestionBank'
import MedicalCheckboxGroup from './components/MedicalCheckboxGroup';
import MedicalRadioGroup from './components/MedicalRadioGroup';
import MedicalTextInput from './components/MedicalTextInput';
import MedicalDateInput from './components/MedicalDateInput';
import MedicalNumberInput from './components/MedicalNumberInput';
import MedicalToggle from './components/MedicalToggle';
import AbdomenMap1 from './components/AbdomenMap1';
import BodyMap from './components/SilhoutteMap';

import WelcomePage from './pages/WelcomePage'; 
import DetailPage from './pages/DetailPage';
import PainPage from './pages/painModule';


function App() {
  const [step, setStep] = useState(0);
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [currentComplaintIndex, setCurrentComplaintIndex] = useState(0);
  const [allAnswers, setAllAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Web Speech API is not supported in this browser. Try Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      // Append the voice text to any existing text in the notes
      const currentText = allAnswers['p_final_notes'] || "";
      updateAnswer('p_final_notes', currentText + (currentText ? " " : "") + transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech error:", event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const handleFinalSubmit = async () => {
    if (loading) return; // Prevent double clicking
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/save`, {
        complaints: selectedComplaints,
        history: allAnswers
      },);
      alert("Success! History saved to Local DB.");
      // Reset the form so the next patient can use it
      window.location.reload();
    } catch (err) {
      alert("Backend Error! Is your server running on port 5000?");
    }
    setLoading(false);
  };

  const complaintsList = Object.keys(QuestionBank);

  const toggleComplaint = (name) => {
    if (selectedComplaints.includes(name)) {
      setSelectedComplaints(selectedComplaints.filter(c => c !== name));
    } else {
      setSelectedComplaints([...selectedComplaints, name]);
    }
  };

  const updateAnswer = (id, value) => {
    setAllAnswers(prev => ({ ...prev, [id]: value }));
  };

  const activeComplaint = selectedComplaints[currentComplaintIndex];
    const isLastComplaint = currentComplaintIndex === selectedComplaints.length - 1;

    const handleNextAction = () => {
    if (isLastComplaint) {
        setStep(5);
    } else {
        setCurrentComplaintIndex(currentComplaintIndex + 1);
        window.scrollTo(0, 0); // Ensures the user starts at the top of the new page
    }
    };

    const handleBackAction = () => {
    if (step === 5) {
      setStep(4);
      setCurrentComplaintIndex(selectedComplaints.length - 1);
    }
    else if (step ===4) {
      if (currentComplaintIndex === 0) {
          setStep(3);
      } else {
          setCurrentComplaintIndex(currentComplaintIndex - 1);
      }
    }
    window.scrollTo(0, 0);
    };

  
  const stepClass = `padding-step-${step}`;
  
  return (
    <div className={`main-app-container padding-step-${step} ${step === 3 ? 'fixed-height' : ''}`}>
      
      {/* HEADER SECTION */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        {/* The Logo Image */}
        <img 
            src="/static/ailogo.png" 
            alt="AI Logo" 
            className="triage-logo" 
        />
        <h1 className="greenzonetriage-title">Green Zone Triage</h1>
      </div>

      {step === 0 && <WelcomePage onStart={() => setStep(1)} />}

      {/* STEP 1: DEMOGRAPHICS (New Page) */}
      {step === 1 && (
        <DetailPage 
          allAnswers={allAnswers} 
          updateAnswer={updateAnswer} 
          onNext={() => setStep(2)} 
        />
      )}

      {/* STEP 1: DEMOGRAPHICS (New Page) */}
      {step === 2 && (
        <PainPage 
          allAnswers={allAnswers} 
          updateAnswer={updateAnswer} 
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}  
        />
      )}

      {/*STEP 2: CHIEF COMPLAINT SELECTION*/}
      {step === 3 && (
        <div className="step1main-style">
          <h3>Select Chief Complaints</h3>
          <p>Please select all that apply to you</p>
          
          <div className="step1complain-container">
            {complaintsList.map(c => (
              <button 
                key={c}
                onClick={() => toggleComplaint(c)}
                className={`step1complain-button ${selectedComplaints.includes(c)? 'selectedComplaints' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>

          <button 
            onClick={() => { setStep(4); setCurrentComplaintIndex(0); }}
            disabled={selectedComplaints.length === 0}
            className="step1complain-submit"
          >
            Start Assessment ({selectedComplaints.length})
          </button>
        </div>
      )}

      {/* STEP 4: MEDICAL HISTORY QUESTIONS */}
      {step === 4 && (
        <div className="step2main-style">
          <button 
            onClick={handleBackAction} 
            className="step2back-button"
          >
            ← {currentComplaintIndex === 0 ? "Back to selection" : "Previous Section"}
          </button>

          
            <div key={activeComplaint} className="step2title-style">
              <h3>
                {activeComplaint}
              </h3>
              
              {QuestionBank[activeComplaint].map(q => (
                <div key={q.id} className="step2question-id"> 
                  <label className="step2question-que">{q.label}</label>
                  
                  {q.type === 'date' && (
                    <MedicalDateInput 
                        value={allAnswers[q.id]} 
                        onChange={(val) => updateAnswer(q.id, val)} 
                    />
                    )}
                  
                  {q.type === 'number' && (
                    <MedicalNumberInput 
                        placeholder={q.placeholder || "Enter number"}
                        value={allAnswers[q.id]}
                        onChange={(val) => updateAnswer(q.id, val)}
                        min={0}
                    />
                    )}
                  
                  {q.type === 'text' && (
                    <MedicalTextInput 
                        placeholder="Type your answer here..."
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

                    {q.type === 'yes_no_toggle' && (
                    <MedicalToggle 
                        label={q.label}
                        value={allAnswers[q.id]} // Stores 'Yes' or 'No'
                        onValueChange={(val) => updateAnswer(q.id, val)}
                        
                        // Pass the boolean from your QuestionBank
                        showTextInput={q.hasExtraInput} 
                        
                        // Stores the actual text (we can store it in a sub-key like qid_details)
                        extraText={allAnswers[q.id + '_details']}
                        onTextChange={(val) => updateAnswer(q.id + '_details', val)}
                    />
                    )}
                  
                  {q.type === 'select' && (
                    <select style={inputStyle} onChange={(e) => updateAnswer(q.id, e.target.value)}>
                      <option value="">-- Select Option --</option>
                      {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  )}

                  {q.type === 'radio_group' && (
                    <MedicalRadioGroup 
                        options={q.options} 
                        selectedOption={allAnswers[q.id]} 
                        onChange={(val) => updateAnswer(q.id, val)} 
                    />
                    )}

                  {q.type === 'range' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <input type="range" min="1" max="10" style={{ width: '80%' }} onChange={(e) => updateAnswer(q.id, e.target.value)} />
                      <span style={{ fontWeight: 'bold', color: '#27ae60', marginTop: '5px' }}>{allAnswers[q.id] || 5} / 10</span>
                    </div>
                  )}

                  {q.type === 'checkbox_group' && (
                    <MedicalCheckboxGroup 
                        options={q.options} 
                        selectedOptions={allAnswers[q.id] || []}
                        onChange={(newVal) => updateAnswer(q.id, newVal)} 
                    />
                    )}

                  {q.type === 'abdomen_map' && (
                      <AbdomenMap1 
                        onSelect={(region) => updateAnswer(q.id, region)} 
                        selectedRegion={allAnswers[q.id]} 
                      />
                  )}

                  {q.type === 'body_map' && (
                      <BodyMap
                        onSelect={(region) => updateAnswer(q.id, region)} 
                        selectedRegion={allAnswers[q.id]} 
                      />
                  )}


                </div>
              ))}
            </div>
          

          <button 
            onClick={handleNextAction} 
            className={`step2submit-button`}
          >
            {isLastComplaint ? "Additional Information" : "Next: " + selectedComplaints[currentComplaintIndex + 1]}
          </button>
        </div>
      )}

      {/* STEP 5: ANY LAST WORD HAHAHAHA */}
      {step === 5 && (
        <div className="step2main-style">
          <button 
            onClick={handleBackAction} 
            className="step2back-button"
          >
            ← Back
          </button>

          
            <div className="step2title-style">
              <h3>
                Additional Information
              </h3>

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
                    <button 
                      onClick={startSpeechRecognition}
                      className={`mic-button ${isRecording ? 'recording' : ''}`}
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
                      }}
                    >
                      {isRecording ? '🛑' : '🎤'}
                    </button>   
                </div>
            </div>
          </div>
          

          <button 
            onClick={handleFinalSubmit} 
            disabled={loading}
            className={`step2submit-button ${isLastComplaint? 'lastcomplaint':''}`}
          >
            {loading ? "Processing..." : "Submit to Doctor →"}
          </button>
        </div>
      )}
    </div>
  );
}

// Simple styling object for inputs to avoid repeating code
const inputStyle = {
  width: '100%',
  maxWidth: '300px',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  textAlign: 'center',
  display: 'inline-block'
};

export default App