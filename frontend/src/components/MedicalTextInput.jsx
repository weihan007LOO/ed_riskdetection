import React from 'react';

export default function MedicalTextInput({ placeholder, value, onChange, isTextArea = false }) {
  const style = {
    width: '100%',
    maxWidth: '378px',
    padding: '12px 15px',
    borderRadius: '10px',
    border: '1px solid #a0a0a0ff', 
    backgroundColor: '#ffffff',
    fontSize: '16px',
    color: '#333',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    display: 'block',
    margin: '10px auto',
    boxSizing: 'border-box',
    color: 'black',
    marginBottom:'30px',
    textAlign: 'center'
  };

  // This function makes the border green when you click inside
  const handleFocus = (e) => (e.target.style.borderColor = '#27ae60');
  const handleBlur = (e) => (e.target.style.borderColor = '#eee');

  return isTextArea ? (
    <textarea
      style={{ ...style, minHeight: '100px', resize: 'vertical' }}
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  ) : (
    <input
      type="text"
      style={style}
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}