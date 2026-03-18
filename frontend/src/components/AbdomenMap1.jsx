import React from 'react';
// 1. Import the image file
import abdomenImg from "../assets/abdomen.jpg";

export default function AbdomenMap1({ onSelect, selectedRegion = []}) {
  // These % values create a 3x3 grid. 
  // If your image has extra space (like chest or legs), 
  // you will need to adjust these percentages.
  const zones = [
    { id: "RUQ", label: "Right Upper", top: "22.5%", left: "7%", width: "33%", height: "25%" },
    { id: "Epi", label: "Epigastric", top: "22.5%", left: "40%", width: "20%", height: "25%" },
    { id: "LUQ", label: "Left Upper", top: "22.5%", left: "60%", width: "32.5%", height: "25%" },
    
    { id: "RL",  label: "Right Mid",   top: "47.5%", left: "7%", width: "33%", height: "20%" },
    { id: "Umb", label: "Navel",       top: "47.5%", left: "40%", width: "20%", height: "20%" },
    { id: "LL",  label: "Left Mid",    top: "47.5%", left: "60%", width: "32.5%", height: "20%" },
    
    { id: "RIF", label: "Right Lower", top: "67.5%", left: "7%", width: "33%", height: "24%" },
    { id: "Sup", label: "Suprapubic",  top: "67.5%", left: "40%", width: "20%", height: "24%" },
    { id: "LIF", label: "Left Lower",  top: "67.5%", left: "60%", width: "32.5%", height: "24%" },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <div style={{ 
        position: 'relative', 
        display: 'inline-block', 
        width: '100%', 
        maxWidth: '400px', 
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        
        {/* 2. Use the imported variable as the src */}
        <img 
          src={abdomenImg} 
          alt="Abdomen Map1" 
          style={{ width: '100%', display: 'block', pointerEvents: 'none' }} 
        />

        {zones.map((zone) => (
          <div
            key={zone.id}
            onClick={() => onSelect(zone.id)}
            style={{
              position: 'absolute',
              top: zone.top,
              left: zone.left,
              width: zone.width,
              height: zone.height,
              cursor: 'pointer',
              // Highlight selected area
              //border: '1px solid red',
              backgroundColor: selectedRegion.includes(zone.id) ? 'rgba(39, 174, 96, 0.4)' : 'transparent',
              border: selectedRegion.includes(zone.id) ? '2px solid #27ae60' : '1px solid rgba(0,0,0,0.05)',
              boxSizing: 'border-box'
            }}
          />
        ))}
      </div>
    </div>
  );
}