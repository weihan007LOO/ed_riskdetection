import React, { useState } from 'react';
import './HeadMap.css';

function HeadMap({ onSelect, selectedRegion = []}) {
  // Set this to true to see the coordinates, false to hide them
  const [showGrid, setShowGrid] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Logic to handle when a part is clicked
  const handleSelection = (partName) => {
    onSelect(partName);
  };

  // This updates the X and Y coordinates as you move the mouse
  /*
  const handleMouseMove = (e) => {
    const svg = e.currentTarget;
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    
    // Converts screen pixels to SVG coordinates (0-400, 0-800)
    const cursor = point.matrixTransform(svg.getScreenCTM().inverse());
    setCoords({ x: Math.round(cursor.x), y: Math.round(cursor.y) });
  };

  // Helper to generate grid lines every 50 units
  const renderGrid = () => {
    const lines = [];
    for (let i = 0; i <= 800; i += 50) {
      // Horizontal lines
      lines.push(<line key={`h${i}`} x1="0" y1={i} x2="400" y2={i} stroke="rgba(255,0,0,0.2)" strokeWidth="1" />);
      // Vertical lines
      if (i <= 400) {
        lines.push(<line key={`v${i}`} x1={i} y1="0" x2={i} y2="800" stroke="rgba(255,0,0,0.2)" strokeWidth="1" />);
      }
    }
    return lines;
  };*/

  return (
    <div className="headmap-container">
      {/* 1. THE BASE IMAGE */}
      {/* 1. COORDINATE DISPLAY (Top Left) 
      {showGrid && (
        <div style={{
          position: 'absolute', top: 10, left: 50, zIndex: 200,
          background: 'black', color: 'lime', padding: '5px',
          fontFamily: 'monospace', borderRadius: '4px', pointerEvents: 'none'
        }}>
          X: {coords.x}, Y: {coords.y}
        </div>
      )}*/}
      <img 
        src="/head1.PNG" 
        alt="Head Map" 
        className="headmap-base-image"
      />

      {/* 2. SVG LAYER (For Chest, Abdomen, Neck, Pelvis) */}
      <svg 
        viewBox="0 0 400 800" 
        className="headmap-svg-overlay"
        preserveAspectRatio="none"
        /*onMouseMove={handleMouseMove}*/
      >
        {/* 🔥 CALL THE GRID HERE 🔥 */}
        {/*
        {showGrid && renderGrid()}*/}

        {/* Frontal Area */}
        <path 
          d="M 143 233 Q 173,195 200,189 Q 229,180 249,210 Q 258,225 263,248 Q 258,275 266,296 Q 259,285 252,310 Q 245,262 235,263 Q 208,259 199,293 Q 184,276 165,288 L 135 308 Q 132,266 143,233 Z" 
          className={selectedRegion.includes('Frontal') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Frontal')}
        />

        {/* Occipital Area */}
        <path 
          d="M 105 434 Q 113,417 125,417 Q 127,453 145,469 L 159 481 Q 149,495 143,530 Q 110,490 105,434 Z" 
          className={selectedRegion.includes('Occipital') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Occipital')}
        />

        {/* Temporal Area */}
        <path 
          d="M 135 308 L 165 288 Q 186,277 199,293 Q 198,313 203,337 Q 198,335 179,368 L 156 405 Q 146,367 131,389 Q 125,402,125,417 Q 110,352 135,308 Z" 
          className={selectedRegion.includes('Temporal') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Temporal')}
        />

        {/* Orbital Area */}
        <path 
          d="M 199 293 Q 207,261 235,263 Q 245,262 252,310 L 252 328 Q 240,358 224,358 Q 211,353 203,337 Q 198,316 199,293 Z" 
          className={selectedRegion.includes('Orbital') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Orbital')}
        />

        {/* Orbital Area */}
        <path 
          d="M 263 248 Q 277,272 273,305 Q 257,288 263 248 Z" 
          className={selectedRegion.includes('Orbital') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Orbital')}
        />

        {/* Nasal Area */}
        <path 
          d="M 252 310 Q 259,285 266,296 L 285 324 Q 304,336 286,373 L 275 371 Q 271,382 265,376 Q 261,368 262,356 L 252 328 Z" 
          className={selectedRegion.includes('Nasal') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Nasal')}
        />

        {/* Infraorbital Area */}
        <path 
          d="M 224 358 Q 240,357 252 328 L 262 356 Q 261,367 264,375 L 254 391 L 225 406 Q 227,381 224,358Z" 
          className={selectedRegion.includes('Infraorbital') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Infraorbital')}
        />

        {/* Parietal Area */}
        <path 
          d="M 105 434 Q 92,298 143,233 Q 131,269 135,308 Q 110,351 125,417 Q 111,418 105,434 Z" 
          className={selectedRegion.includes('Parietal') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Parietal')}
        />

        {/* Auricular Area */}
        <path 
          d="M 125 417 Q 125,402 131,389 Q 147,367 156,405 Q 155,424 160,436 Q 161,443 166,454 Q 180,481 159,481 L 145 469 Q 126,450 125,417 Z" 
          className={selectedRegion.includes('Auricular') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Auricular')}
        />

        {/* Zygomatic Area */}
        <path 
          d="M 156 405 L 179 368 Q 195,338 203,337 Q 211,353 224,358 Q 227,383 225,406 Q 187,407 177,417 L 160 436 Q 155,422 156,405 Z" 
          className={selectedRegion.includes('Zygomatic') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Zygomatic')}
        />

        {/* Buccal Area */}
        <path 
          d="M 160 436 L 177 417 Q 192,406 225,406 L 254 391 Q 242,434 263,466 Q 257,484 264,510 L 224 522 Q 187,536 169,477 Q 175,472 166,454 Q 162,445 160,436 Z" 
          className={selectedRegion.includes('Buccal') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Buccal')}
        />

        {/* Mental Area */}
        <path 
          d="M 263 466 Q 269,466 278,458 Q 289,448 294,450 Q 302,485 295,496 L 264 510 Q 257,484 263,466 Z" 
          className={selectedRegion.includes('Mental') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Mental')}
        />

        {/* Oral Area */}
        <path 
          d="M 264 375 Q 270,383 275,371 L 286 373 Q 302,406 294,450 Q 287,448 278,458 Q 270,466 263,466 Q 242,433 254,391 Z" 
          className={selectedRegion.includes('Oral') ? 'headmap-svg-active' : 'headmap-svg-region'}
          onClick={() => handleSelection('Oral')}
        />
        
      </svg>
      {/* Toggle button for your convenience */}
      {/*
      <button 
        onClick={() => setShowGrid(!showGrid)}
        style={{ position: 'absolute', top: 0, right: 0, zIndex: 10, opacity: 0.5 }}
      >
        {showGrid ? 'Hide Grid' : 'Show Grid'}
      </button> */}
    </div>
  );
}



export default HeadMap;