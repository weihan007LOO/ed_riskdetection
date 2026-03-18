import React from 'react';

export default function AbdomenMap({ onSelect, selectedRegion }) {
  // Mapping your short codes to specific positions and user-friendly labels
  const regions = [
    { id: "RUQ", label: "Right Upper (RHC)", x: 0, y: 0 },
    { id: "Epi", label: "Epigastric", x: 33.3, y: 0 },
    { id: "LUQ", label: "Left Upper (LHC)", x: 66.6, y: 0 },
    { id: "RL", label: "Right Lumbar", x: 0, y: 33.3 },
    { id: "Umb", label: "Umbilical", x: 33.3, y: 33.3 },
    { id: "LL", label: "Left Lumbar", x: 66.6, y: 33.3 },
    { id: "RIF", label: "Right Lower (RIF)", x: 0, y: 66.6 },
    { id: "Sup", label: "Suprapubic", x: 33.3, y: 66.6 },
    { id: "LIF", label: "Left Lower (LIF)", x: 66.6, y: 66.6 },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Tap the area where you feel pain:</p>
      
      <svg 
        viewBox="0 0 100 110" 
        style={{ width: '100%', maxWidth: '280px', height: 'auto', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }}
      >
        {/* Torso Outline */}
        <path 
          d="M25,5 Q50,-2 75,5 L82,100 Q50,110 18,100 Z" 
          fill="#fdfdfd" 
          stroke="#bdc3c7" 
          strokeWidth="0.5" 
        />

        {regions.map((r) => (
          <g key={r.id} onClick={() => onSelect(r.id)} style={{ cursor: 'pointer' }}>
            {/* Clickable Area */}
            <rect 
              x={r.x} y={r.y} width="33.3" height="33.3" 
              fill={selectedRegion === r.id ? '#27ae60' : 'transparent'} 
              fillOpacity={selectedRegion === r.id ? '0.4' : '1'}
              stroke="#ecf0f1"
              strokeWidth="0.2"
            />
            
            {/* Labels inside the boxes */}
            <text 
              x={r.x + 16.6} y={r.y + 18} 
              fontSize="3.5" 
              textAnchor="middle" 
              fill={selectedRegion === r.id ? '#1e8449' : '#7f8c8d'}
              style={{ fontWeight: selectedRegion === r.id ? 'bold' : 'normal', pointerEvents: 'none' }}
            >
              {r.label}
            </text>

            {/* Special dot for the Belly Button (Umb) */}
            {r.id === "Umb" && (
              <circle cx="50" cy="50" r="1.5" fill="#bdc3c7" pointerEvents="none" opacity={selectedRegion === "Umb" ? 0 : 1} />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}