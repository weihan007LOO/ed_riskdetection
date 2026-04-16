import React from 'react';
import MedicalTextInput from './MedicalTextInput';

export default function MedicalToggle({ 
  value, 
  onValueChange, 
  extraText, 
  onTextChange, 
  showTextInput = false ,
  step,
  isMobile
}) {
  
  const isYes = value === 'Yes';
  const isNo = value === 'No';
  const compact = step === 5 && isMobile;

  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      {/* 1. REMOVED THE LABEL FROM HERE TO STOP DUPLICATION */}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
        <button
          type="button"
          onClick={() => onValueChange('Yes')}
          style={{
            padding: '10px 30px',
            borderRadius: '8px',
            border: '2px solid',
            borderColor: isYes ? '#27ae60' : '#dcdcdc',
            backgroundColor: isYes ? '#27ae60' : 'white',
            color: isYes ? 'white' : '#333',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.2s',
            marginBottom: compact ? '10px' : '30px'
          }}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={() => onValueChange('No')}
          style={{
            padding: '10px 30px',
            borderRadius: '8px',
            border: '2px solid',
            borderColor: isNo ? '#e74c3c' : '#dcdcdc',
            backgroundColor: isNo ? '#e74c3c' : 'white',
            color: isNo ? 'white' : '#333',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.2s',
            marginBottom: compact ? '10px' : '30px'
          }}
        >
          No
        </button>
      </div>

      {showTextInput && isYes && (
        <div style={{ marginTop: '10px' }}>
          <MedicalTextInput
            placeholder="Please provide details..."
            value={extraText}
            onChange={onTextChange}
          />
        </div>
      )}
    </div>
  );
}