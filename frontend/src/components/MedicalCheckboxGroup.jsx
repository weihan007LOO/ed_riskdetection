import React from 'react';

export default function MedicalCheckboxGroup({ options, selectedOptions = [], onChange }) {
  const handleToggle = (option) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(newSelection);
  };

  return (
    <div style={{ 
      textAlign: 'left', 
      display: 'block', 
      margin: '10px auto',
      backgroundColor: '#ffffff', // Changed container to white to match your theme
      padding: '20px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '350px',
      border: '1px solid #a0a0a0ff', // Grey border
      marginBottom:'50px',
      boxSizing: 'border-box'
    }}>
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option);
        
        return (
          <label key={option} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '12px', 
            color: '#333', 
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            {/* Hidden real checkbox */}
            <input 
              type="checkbox" 
              checked={isSelected}
              style={{ display: 'none' }} 
              onChange={() => handleToggle(option)} 
            />

            {/* Custom Styled Box */}
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              border: `2px solid ${isSelected ? '#27ae60' : '#dcdcdc'}`, // Green if selected, Grey if not
              backgroundColor: isSelected ? '#27ae60' : '#ffffff', // Fills green when selected
              marginRight: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}>
              {/* This is the white checkmark tick */}
              {isSelected && (
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
              )}
            </div>

            {option}
          </label>
        );
      })}
    </div>
  );
}