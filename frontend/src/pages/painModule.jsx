import React, { useState } from 'react';
import { getPainModule, getSpecificQuestions } from '../QuestionBank1';
import MedicalCheckboxGroup from '../components/MedicalCheckboxGroup';
import MedicalRadioGroup from '../components/MedicalRadioGroup';
/*import MedicalTextInput from '../components/MedicalTextInput';
import MedicalDateInput from '../components/MedicalDateInput';
import MedicalNumberInput from '../components/MedicalNumberInput';*/
import MedicalToggle from '../components/MedicalToggle';
import AbdomenMap1 from '../components/AbdomenMap1';
import ChestMap from '../components/ChestMap';
import HeadMap from '../components/HeadMap';
import BodyMap from '../components/SilhoutteMap';
import './painModule.css';

function PainPage({ allAnswers, updateAnswer, onNext, onBack }) {
  const [subStep, setSubStep] = useState(1);
  const [extraPartIndex, setExtraPartIndex] = useState(0);

  //const questions = getPainModule(allAnswers);
  const universalQuestions = getPainModule(); 
  // 1. Get an array of selected locations
  const selectedLocs = allAnswers['p_loc'] || [];

  const partsWithExtras = selectedLocs.filter(loc => getSpecificQuestions(loc).length > 0);

  // Logic to handle "Next" button within this module
  const handleInternalNext = () => {
    const zoomParts = ['Abdomen', 'Chest', 'Head'];
    const isPart = selectedLocs.some(part => zoomParts.includes(part));
    
    if (subStep === 1) {
      // If Abdomen is chosen, go to Step 2 (Abdomen Map), else skip to Step 3 (Questions)
      setSubStep(isPart ? 2 : 3);
    } else if (subStep === 2) {
      setSubStep(3);
    } else if (subStep === 3) {
        if (partsWithExtras.length > 0) {
        setExtraPartIndex(0); // Start with the first part
        setSubStep(4);
      } else {
        onNext();
      }
    } else if (subStep === 4) {
      // Check if there are more body parts with extra questions
      if (extraPartIndex < partsWithExtras.length - 1) {
        setExtraPartIndex(extraPartIndex + 1);
        window.scrollTo(0, 0);
      } else {
        onNext();
      }
    }
    window.scrollTo(0, 0);
  };

  const handleBackAction = () => {
  if (subStep === 4) {
    if (extraPartIndex > 0) {
        setExtraPartIndex(extraPartIndex - 1);
      } else {
        setSubStep(3);}
  } else if (subStep === 3) {
    const zoomParts = ['Abdomen', 'Chest', 'Head'];
    const isPart = selectedLocs.some(part => zoomParts.includes(part));
    setSubStep(isPart ? 2 : 1);
  } else if (subStep === 2) {
    setSubStep(1);
  } else if (subStep === 1) {
    onBack();
  } 
  window.scrollTo(0, 0);
};

  return (
    <div className="painpage-container">
      <div className="painpage-header">
        <h2>{subStep === 1 ? "Select Area of Pain" : subStep === 2 ? "Pinpoint Location" : subStep === 3 ?"Pain Assessment" : `${partsWithExtras[extraPartIndex]} Symptoms` }</h2>
      </div>

      <div className="painpage-formArea">
        {/* PAGE 1: FULL BODY MAP */}
        {subStep === 1 && (
          <div className="painpage-id">
            <button 
            onClick={handleBackAction} 
            className="step2back-button"
          >← Back</button>
            <label className="painpage-mainque">Where is the pain? (👉 Tap on the body parts where you feel the pain)</label>
            <BodyMap 
              onSelect={(val) => updateAnswer('p_loc', val)} 
              selectedRegion={allAnswers['p_loc']} 
            />
          </div>
        )}

        {/* PAGE 2: ABDOMEN ZOOM (Only if applicable) */}
        {subStep === 2 && (
          <div className="painpage-id">
            <button 
            onClick={handleBackAction} 
            className="step2back-button"
          >← Back</button>
            <label className="painpage-mainque">(👉 Tap on the area where you feel the pain)</label>
            <div className="painpage-inputWrapper">
              {allAnswers['p_loc']?.includes('Head') && (
                <HeadMap 
                  onSelect={(val) => {
                    const current = allAnswers['p_sub_loc'] || [];
                    const newVal = current.includes(val) 
                      ? current.filter(item => item !== val) 
                      : [...current, val];
                    updateAnswer('p_sub_loc', newVal);}}
                  selectedRegion={allAnswers['p_sub_loc'] || []}
                />
              )}
              {allAnswers['p_loc']?.includes('Chest') && (
                <ChestMap 
                  onSelect={(val) => {
                    const current = allAnswers['p_sub_loc'] || [];
                    const newVal = current.includes(val) 
                      ? current.filter(item => item !== val) 
                      : [...current, val];
                    updateAnswer('p_sub_loc', newVal);}}
                  selectedRegion={allAnswers['p_sub_loc'] || []}
                />
              )}
              {allAnswers['p_loc']?.includes('Abdomen') && (
                <AbdomenMap1 
                  onSelect={(val) => {
                    const current = allAnswers['p_sub_loc'] || [];
                    const newVal = current.includes(val) 
                      ? current.filter(item => item !== val) 
                      : [...current, val];
                    updateAnswer('p_sub_loc', newVal);}}
                  selectedRegion={allAnswers['p_sub_loc'] || []}
                />
              )}
            </div>
          </div>
        )}

        {/* PAGE 3: THE REST OF THE QUESTIONS */}
        {subStep === 3 && (
          <>
          <button 
            onClick={handleBackAction} 
            className="step2back-button"
          >← Back</button>
            {universalQuestions.map((q) => {
              // Skip the map questions as they were handled in subStep 1 & 2
              //if (q.type === 'body_map' || q.type === 'abdomen_map') return null;
              
              // Branching logic for duration
              if (q.id === "p_overall_duration" && allAnswers["p_current"] !== "No") return null;

              return (
                <div key={q.id} className="painpage-id">
                  <label className="painpage-que">{q.label}</label>
                  <div className="painpage-inputWrapper">
                    {/* Render your inputs as before */}
                    {q.type === 'radio_group' && (
                      <MedicalRadioGroup 
                        options={q.options} 
                        selectedOption={allAnswers[q.id]} 
                        onChange={(val) => updateAnswer(q.id, val)} 
                      />
                    )}

                    {q.type === 'checkbox_group' && (
                      <MedicalCheckboxGroup 
                      options={q.options} 
                      selectedOptions={allAnswers[q.id] || []}
                      onChange={(newVal) => updateAnswer(q.id, newVal)} 
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

                    {q.type === 'range' && (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <input type="range" min="1" max="10" style={{ width: '80%' }} onChange={(e) => updateAnswer(q.id, e.target.value)} />
                        <span style={{ fontWeight: 'bold', color: '#27ae60', marginTop: '5px' }}>{allAnswers[q.id] || 5} / 10</span>
                      </div>
                    )}

                    {/* ... other type handlers (checkbox, range, toggle) */}
                  </div>
                </div>
              );
            })}
          </>
        )}
        {/* PAGE 4: THE REST OF THE QUESTIONS */}
        {subStep === 4 && (
          <>
          <button 
            onClick={handleBackAction} 
            className="step2back-button"
          >← Back</button>
            {getSpecificQuestions(partsWithExtras[extraPartIndex]).map((q) => {
              // Skip the map questions as they were handled in subStep 1 & 2
              //if (q.type === 'body_map' || q.type === 'abdomen_map') return null;
              
              // Branching logic for duration
              if (q.id === "p_overall_duration" && allAnswers["p_current"] !== "No") return null;

              return (
                <div key={q.id} className="painpage-id">
                  <label className="painpage-que">{q.label}</label>
                  <div className="painpage-inputWrapper">
                    {/* Render your inputs as before */}
                    {q.type === 'radio_group' && (
                      <MedicalRadioGroup 
                        options={q.options} 
                        selectedOption={allAnswers[q.id]} 
                        onChange={(val) => updateAnswer(q.id, val)} 
                      />
                    )}

                    {q.type === 'checkbox_group' && (
                      <MedicalCheckboxGroup 
                      options={q.options} 
                      selectedOptions={allAnswers[q.id] || []}
                      onChange={(newVal) => updateAnswer(q.id, newVal)} 
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

                    {q.type === 'range' && (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <input type="range" min="1" max="10" style={{ width: '80%' }} onChange={(e) => updateAnswer(q.id, e.target.value)} />
                        <span style={{ fontWeight: 'bold', color: '#27ae60', marginTop: '5px' }}>{allAnswers[q.id] || 5} / 10</span>
                      </div>
                    )}

                    {/* ... other type handlers (checkbox, range, toggle) */}
                  </div>
                </div>
              );
            })}
          </>
        )}

      </div>

      <div className="painpage-footer">
        <button onClick={handleInternalNext} className="painpage-button">
          {(() => {
            // 1. If we are on the universal questions (SubStep 3)
            if (subStep === 3) {
              return partsWithExtras.length > 0 ? "Next: Specific Symptoms" : "Next: Chief Complaint";
            }
            
            // 2. If we are on the Extra Questions (SubStep 4)
            if (subStep === 4) {
              const isLastPart = extraPartIndex === partsWithExtras.length - 1;
              return isLastPart ? "Next: Select Chief Complaint" : `Continue to ${partsWithExtras[extraPartIndex + 1]}`;
            }
            
            // 3. Default for Step 1 and 2
            return "Continue";
          })()}
        </button>
      </div>
    </div>
  );
}

export default PainPage;