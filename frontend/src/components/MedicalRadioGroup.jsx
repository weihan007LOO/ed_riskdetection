export default function MedicalRadioGroup({ options, selectedOption, onChange, isMobile }) {
  const compact = isMobile;

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '10px',
      margin: '10px auto',
      width: '100%',
      maxWidth: '350px',
      marginBottom: compact ? '10px' : '50px'
    }}>
      {options.map((option) => {
        const isSelected = selectedOption === option;
        const isRemove = option === "Remove";

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid',
              borderColor: isSelected
                ? (isRemove ? '#e74c3c' : '#27ae60')
                : '#eee',
              backgroundColor: isSelected
                ? (isRemove ? '#fb9d93' : '#eafaf1')
                : 'white',
              color: 'black',
              fontWeight: isSelected ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: '0.2s',
              textAlign: 'center'
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}