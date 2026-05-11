import React from 'react';

export default function MedicalTextInput({
  placeholder,
  value,
  onChange,
  isTextArea = false,
  numeric = false,   // ✅ NEW
  maxLength = 8      // default for your case
}) {

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
    marginBottom: '30px',
    textAlign: 'center'
  };

  const handleFocus = (e) => (e.target.style.borderColor = '#27ae60');
  const handleBlur = (e) => (e.target.style.borderColor = '#a0a0a0ff');

  const handleChange = (e) => {
    let val = e.target.value;

    if (numeric) {
      // keep digits only
      val = val.replace(/\D/g, '');

      // limit length
      if (val.length > maxLength) {
        val = val.slice(0, maxLength);
      }
    }

    onChange(val);
  };

  if (isTextArea) {
    return (
      <textarea
        style={{ ...style, minHeight: '100px', resize: 'vertical' }}
        placeholder={placeholder}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  }

  return (
    <input
      type={numeric ? "text" : "text"}
      inputMode={numeric ? "numeric" : "text"}   // ✅ number pad
      pattern={numeric ? "[0-9]*" : undefined}
      style={style}
      placeholder={placeholder}
      value={value || ''}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}