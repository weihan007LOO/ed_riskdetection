import React from 'react';

export default function MedicalDateInput({ value, onChange }) {
  const style = {
    width: '100%',
    maxWidth: '378px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #a0a0a0ff',
    backgroundColor: '#ffffff',
    fontSize: '16px',
    color: '#333',
    fontFamily: 'inherit',
    textAlign: 'center',
    outline: 'none',
    display: 'block',
    margin: '10px auto',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    marginBottom:'30px',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ width: '100%' }}>
      {/* This <style> block forces the hidden icon to be visible and black */}
      <style>
        {`
          input[type="date"]::-webkit-calendar-picker-indicator {
            display: block;
            background-repeat: no-repeat;
            width: 20px;
            height: 20px;
            cursor: pointer;
            /* 'invert(0)' forces it to be black. If it stays white, use 'invert(1)' */
            filter: invert(0); 
            opacity: 1;
          }
        `}
      </style>

      <input
        type="date"
        style={style}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = '#27ae60')}
        onBlur={(e) => (e.target.style.borderColor = '#a0a0a0ff')}
      />
    </div>
  );
}