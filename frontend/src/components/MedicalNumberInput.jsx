import React from 'react';

export default function MedicalNumberInput({ value, onChange, placeholder, min = 0, max = 100, isMobile }) {
  const compact = isMobile;
  const style = {
    width: '100%',
    maxWidth: '378px',
    padding: '12px',
    // We add a little extra padding on the right so the arrows don't 
    // cover the numbers if the user types a long value
    paddingRight: '8px', 
    borderRadius: '8px',
    border: '1px solid #a0a0a0ff', // Your specific grey
    backgroundColor: '#ffffff',
    fontSize: '16px',
    color: '#333',
    fontFamily: 'inherit',
    textAlign: 'center',
    outline: 'none',
    display: 'block',
    margin: '10px auto',
    transition: 'border-color 0.3s ease',
    cursor: 'default',
    marginBottom: compact ? '10px' : '30px',
    boxSizing: 'border-box'
  };

  return (
    <input
      type="number"
      style={style}
      placeholder={placeholder || "0"}
      value={value || ''}
      min={min}
      max={max}
      onChange={(e) => onChange(e.target.value)}
      // Border turns green on click
      onFocus={(e) => (e.target.style.borderColor = '#27ae60')}
      onBlur={(e) => (e.target.style.borderColor = '#a0a0a0ff')}
    />
  );
}