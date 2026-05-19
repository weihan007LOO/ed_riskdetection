import React from 'react';
// 1. Import the image file

export default function ChestMap({ onSelect, selectedRegion = []}) {
  // These % values create a 3x3 grid. 
  // If your image has extra space (like chest or legs), 
  // you will need to adjust these percentages.
  const zones = [
    
    { id: "URC",  label: "Upper Right Chest",   top: "47.5%", left: "19%", width: "20.5%", height: "25.5%" },
    { id: "UCC", label: "Upper Central Chest",  top: "47.5%", left: "39.5%", width: "22.5%", height: "25.5%" },
    { id: "ULC",  label: "Upper Left Chest",    top: "47.5%", left: "62%", width: "20.5%", height: "25.5%" },
    
    { id: "LRC", label: "Lower Right Chest",    top: "72.5%", left: "19%", width: "20.5%", height: "21.5%" },
    { id: "LCC", label: "Lower Central Chest",  top: "72.5%", left: "39.5%", width: "22.5%", height: "21.5%" },
    { id: "LLC", label: "Lower Left Chest",     top: "72.5%", left: "62%", width: "20.5%", height: "21.5%" },
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
          src="/chest1.png"
          alt="Chest Map" 
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