import React from 'react';
import { DemographicQuestions } from '../DemographicBank';
import MedicalCheckboxGroup from '../components/MedicalCheckboxGroup';
import MedicalRadioGroup from '../components/MedicalRadioGroup';
import MedicalTextInput from '../components/MedicalTextInput';
import MedicalDateInput from '../components/MedicalDateInput';
import MedicalNumberInput from '../components/MedicalNumberInput';
import MedicalToggle from '../components/MedicalToggle';
import './detail.css';

function DetailPage({ allAnswers, updateAnswer, onNext }) {
  const [errors, setErrors] = React.useState({});

  const handleChange = (id, value) => {
    updateAnswer(id, value);

    // ✅ clear error immediately when user fixes input
    setErrors(prev => {
      if (!prev[id]) return prev; // no error → no change
      const newErrors = { ...prev };
      delete newErrors[id];
      return newErrors;
    });
  };
  
  return (
    <div className="detailpage-container">
      {/* HEADER */}
      <div className="detailpage-header">
        <h2>Personal Details</h2>
        <p>
          Please provide your basic information to help us give you the best care.
        </p>
      </div>

      {/* FORM FIELDS */}
      <div className="detailpage-formArea">
        {DemographicQuestions.map((q) => {
          // Conditional Logic: Only show LMP if gender is Female
          if (q.id === 'lmp' && allAnswers['gender'] !== 'Female') return null;
          if (q.id === 'kidney_dialysis' && !allAnswers['comorbids']?.includes("Kidney disease")) return null;
          if (q.id === 'kidney_last' && allAnswers['kidney_dialysis'] !== 'Yes') return null;

          return (
            <div
              key={q.id}
              id={q.id}
              className="detailpage-id"
              style={{
                border: errors[q.id] ? "2px solid #ef4444" : "none",
                borderRadius: "8px",
                padding: errors[q.id] ? "8px" : "0"
              }}
            >
              <label className="detailpage-que">
                {q.label}
                {q.required && <span style={{ color: "red", marginLeft: "4px" }}>*</span>}
              </label>
              
              <div className="detailpage-inputWrapper">
                {q.type === 'number' && (
                  <MedicalNumberInput 
                    value={allAnswers[q.id]} 
                    onChange={(val) => handleChange(q.id, val)} 
                    placeholder={q.placeholder}
                  />
                )}

                {q.type === 'radio_group' && (
                  <MedicalRadioGroup 
                    options={q.options} 
                    selectedOption={allAnswers[q.id]} 
                    onChange={(val) => handleChange(q.id, val)} 
                  />
                )}

                {q.type === 'date' && (
                  <MedicalDateInput 
                    value={allAnswers[q.id]} 
                    onChange={(val) => handleChange(q.id, val)}
                  />
                )}

                {(q.type === 'text' || q.type === 'long_text') && (
                  <MedicalTextInput 
                    isTextArea={q.type === 'long_text'}
                    placeholder={q.placeholder || "Please specify..."}
                    value={allAnswers[q.id]}
                    onChange={(val) => handleChange(q.id, val)}
                    numeric={q.numeric}
                    maxLength={q.maxLength}
                  />
                )}

                {q.type === 'checkbox_group' && (
                  <MedicalCheckboxGroup 
                    options={q.options} 
                    selectedOptions={allAnswers[q.id] || []}
                    onChange={(val) => handleChange(q.id, val)} 
                  />
                )}

                {q.type === 'yes_no_toggle' && (
                    <MedicalToggle 
                    label={q.label}
                    value={allAnswers[q.id]} // Stores 'Yes' or 'No'
                    onChange={(val) => handleChange(q.id, val)}
                                        
                    // Pass the boolean from your QuestionBank
                    showTextInput={q.hasExtraInput} 
                                        
                    // Stores the actual text (we can store it in a sub-key like qid_details)
                    extraText={allAnswers[q.id + '_details']}
                    onTextChange={(val) => handleChange(q.id + '_details', val)}
                    />
                )}
              </div>

              {errors[q.id] && (
                <div style={{ color: "#ef4444", fontSize: "13px", marginTop: "4px", textAlign: "center"}}>
                  This field is required
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER BUTTON */}
      <div className="detailpage-footer">
        <button 
            onClick={() => {
              const newErrors = {};
              let firstErrorId = null;
              DemographicQuestions.forEach(q => {
                // ❗ skip hidden fields
                if (q.id === 'lmp' && allAnswers['gender'] !== 'Female') return;
                if (!q.required) return;

                const val = allAnswers[q.id];

                let isEmpty = false;

                if (q.type === "checkbox_group") isEmpty = !val || val.length === 0;
                else isEmpty = val === undefined || val === null || val === "";

                if (isEmpty) {
                  newErrors[q.id] = true;
                  if (!firstErrorId) firstErrorId = q.id;
                }
              });

              setErrors(newErrors);

              if (firstErrorId) {
                const el = document.getElementById(firstErrorId);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                }
                return;
              }

              onNext();
            }}
            className="detailpage-button"
        >
          Next: Select Chief Complaint
        </button>
      </div>
    </div>
  );
}


export default DetailPage;