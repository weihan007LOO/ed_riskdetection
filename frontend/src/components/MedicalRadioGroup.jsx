import React from 'react';

export default function MedicalRadioGroup({ options, selectedOption, onChange }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '10px',
      margin: '10px auto',
      width: '100%',
      maxWidth: '350px',
      marginBottom:'30px'
    }}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '2px solid',
            // If selected, turn green. If not, stay grey.
            borderColor: selectedOption === option ? '#27ae60' : '#eee',
            backgroundColor: selectedOption === option ? '#eafaf1' : 'white',
            color: 'black',
            fontWeight: selectedOption === option ? 'bold' : 'normal',
            cursor: 'pointer',
            transition: '0.2s',
            textAlign: 'center'
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}