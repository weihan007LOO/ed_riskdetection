import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function MedicalDateInput({ value, onChange, isMobile }) {
  const compact = isMobile;

  const style = {
    width: '378px',
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
    marginBottom: compact ? '10px' : '30px',
    boxSizing: 'border-box'
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <input
      ref={ref}
      value={value || ''}
      onClick={onClick}
      readOnly
      placeholder="dd/mm/yyyy"
      style={style}
      onFocus={(e) => (e.target.style.borderColor = '#27ae60')}
      onBlur={(e) => (e.target.style.borderColor = '#a0a0a0ff')}
    />
  ));

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: '378px' }}>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date) => {
          const formatted = date
            ? date.toISOString().split('T')[0]
            : '';
          onChange(formatted);
        }}
        dateFormat="dd/MM/yyyy"
        customInput={<CustomInput />}
      />
    </div>
    </div>
  );
}