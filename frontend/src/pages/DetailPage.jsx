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

          return (
            <div key={q.id} className="detailpage-id">
              <label className="detailpage-que">{q.label}</label>
              
              <div className="detailpage-inputWrapper">
                {q.type === 'number' && (
                  <MedicalNumberInput 
                    value={allAnswers[q.id]} 
                    onChange={(val) => updateAnswer(q.id, val)} 
                    placeholder={q.placeholder}
                  />
                )}

                {q.type === 'radio_group' && (
                  <MedicalRadioGroup 
                    options={q.options} 
                    selectedOption={allAnswers[q.id]} 
                    onChange={(val) => updateAnswer(q.id, val)} 
                  />
                )}

                {q.type === 'date' && (
                  <MedicalDateInput 
                    value={allAnswers[q.id]} 
                    onChange={(val) => updateAnswer(q.id, val)} 
                  />
                )}

                {(q.type === 'text' || q.type === 'long_text') && (
                  <MedicalTextInput 
                    isTextArea={q.type === 'long_text'}
                    placeholder={q.placeholder || "Please specify..."}
                    value={allAnswers[q.id]}
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
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER BUTTON */}
      <div className="detailpage-footer">
        <button 
            onClick={onNext}
            className="detailpage-button"
        >
          Next: Select Chief Complaint
        </button>
      </div>
    </div>
  );
}


export default DetailPage;