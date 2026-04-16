import React from 'react';
import vomitImg from '/static/Vomit1.png';
import sputumImg from '/static/Phlegm1.png';

export default function MedicalColour({ options, selectedOption, onChange, type }) {
  // Map type to one image per question
  let displayImage = null;
  if(type === 'vomit') displayImage = vomitImg;
  else if(type === 'sputum') displayImage = sputumImg;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      margin: '10px auto',
      marginBottom: '50px'
    }}>
      {/* Fixed image per question type */}

      {/* Options in a row */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        flexWrap: 'wrap', // wrap on smaller screens
        justifyContent: 'center'
      }}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            style={{
              padding: '10px 15px',
              borderRadius: '8px',
              border: '2px solid',
              borderColor: selectedOption === option ? '#27ae60' : '#eee',
              backgroundColor: selectedOption === option ? '#eafaf1' : 'white',
              color: 'black',
              cursor: 'pointer',
              fontWeight: selectedOption === option ? 'bold' : 'normal',
              transition: '0.2s',
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {displayImage && (
        <img
          src={displayImage}
          alt={type}
          style={{ marginTop: '10px', maxWidth: '90%', height: 'auto' }}
        />
      )}
    </div>
  );
}