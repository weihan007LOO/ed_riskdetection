import React from 'react';
import './SilhoutteMap.css';

function BodyMap({ onSelect, selectedRegion = [] }) {
  // Logic to handle when a part is clicked
  const handleSelection = (partName) => {
    let newSelection;
    if (selectedRegion.includes(partName)) {
      // Remove if already selected
      newSelection = selectedRegion.filter(item => item !== partName);
    } else {
      // Add if not selected
      newSelection = [...selectedRegion, partName];
    }
    onSelect(newSelection); // Pass the new array back to the parent (App.jsx)
  };

    const nk = {
    top: 118,
    bottom: 138,
    left: 186,   //Left down
    right: 222,  //Right up
    left1: 179,  //Left up
    right1: 229, //RIght down
    
    curveR: 223, // Right side curvature
    curveL: 185, // Left side curvature
    mid: 130     // Middle point for curves
  };

    const ch = {
    topY: 139,      // Top horizontal line (y)
    topL: 176,      // Top-left corner (x)
    topR: 230,      // Top-right corner (x end)
    
    midL1: 145,     // Shoulder left (Up x)
    midR: 260,      // Shoulder right (Up x end)
    midY: 160,     // Shoulder (Up y)

    midL: 145,      // Shoulder left (Down x)
    midR1: 258,     // Shoulder right (Down x end)
    midY1: 206,      // Shoulder (Down y)

    curveL: 160,    //Left curveMid Up x
    midmidL: 165,   //Left curveMid Up y
    curveL0: 160,   //Left curveMid Down x
    midmidL0: 202,  //Left curveMid Down y
    midL0: 160,     //Big Mid x

    curveR0: 245,   //Right curveMid Up x
    midmidR0: 158,  //Right curveMid Up y
    curveR: 242,    //Right curveMid Down x
    midmidR: 205,   //Right curveMid Down y
    midR0: 242,     //Big Mid x

    midY0: 180,     //Big Mid y
    
    botY: 257,      // Bottom horizontal line (should match abdomen top)
    botL: 151,      // Bottom-left corner
    botR: 250,      // Bottom-right corner    
  };

  const abd = {
    top: 258,
    bottom: 362,
    left: 152,
    right: 250,
    curveR: 240, // Right side curvature
    curveL: 160, // Left side curvature
    mid: 325     // Middle point for curves
  };

  return (
    <div className="bodymap-container">
      {/* 1. THE BASE IMAGE */}
      <img 
        src="full_body_silhoutte1.png" 
        alt="Body Map" 
        className="bodymap-base-image"
      />

      {/* 2. SVG LAYER (For Chest, Abdomen, Neck, Pelvis) */}
      <svg 
        viewBox="0 0 400 800" 
        className="bodymap-svg-overlay"
        preserveAspectRatio="none"
      >
        {/* Head Area */}
        <path 
          d="M 172 47 Q 178,22 200,21 Q 226,22 232,47 Q 238,76 226,90 Q 220,100 222,117 L 186 117 Q 170,125 171,108  Q 168,99 173,96 Q 166,96 170,89 Q 160,85 171,67 Q 169,55 172,47 Z" 
          className={selectedRegion.includes('Head') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('Head')}
        />

        {/* Neck Area */}
        <path 
          d={`M ${nk.left},${nk.top} 
              L ${nk.right},${nk.top} 
              Q ${nk.curveR},${nk.mid} ${nk.right1},${nk.bottom} 
              L ${nk.left1},${nk.bottom} 
              Q ${nk.curveL},${nk.mid} ${nk.left},${nk.top} Z`} 
          className={selectedRegion.includes('Neck') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('Neck')}
        />
        
        {/* Chest Area */}
        <path 
          d={`M ${ch.topL},${ch.topY} 
              L ${ch.topR},${ch.topY} 
              L ${ch.midR},${ch.midY}
              Q ${ch.curveR0},${ch.midmidR0} ${ch.midR0},${ch.midY0}
              Q ${ch.curveR},${ch.midmidR} ${ch.midR1},${ch.midY1}  
              L ${ch.botR},${ch.botY} 
              L ${ch.botL},${ch.botY}
              L ${ch.midL},${ch.midY1}
              Q ${ch.curveL0},${ch.midmidL0} ${ch.midL0},${ch.midY0} 
              Q ${ch.curveL},${ch.midmidL} ${ch.midL1},${ch.midY} Z`}
          className={selectedRegion.includes('Chest') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('Chest')}
        />

        {/* ABDOMEN - Curvy waistline and curved bottom */}
        <path 
          d={`M ${abd.left},${abd.top} 
              L ${abd.right},${abd.top} 
              Q ${abd.curveR},${abd.mid} ${abd.right},${abd.bottom} 
              L ${abd.left},${abd.bottom} 
              Q ${abd.curveL},${abd.mid} ${abd.left},${abd.top} Z`}
          className={selectedRegion.includes('Abdomen') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('Abdomen')}
        />

        {/* Pelvis Area */}
        <path 
          d="M 152 362 L 250 362 L 254 405 L 201 430 L 148 405 Z" 
          className={selectedRegion.includes('Pelvis') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('Pelvis')}
        />

        {/* Right Upper Arm */}
        <path 
          d="M 127 189 Q 133,207 144,206 L 150 257 L 142 295 Q 131,276 117,289 L 128 220 Q 124,201 127,189 Z" 
          className={selectedRegion.includes('RightUpperArm') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('RightUpperArm')}
        />

        {/* Left Upper Arm */}
        <path 
          d="M 258 206 Q 274,202 274,185 Q 278,200 275,220 L 285 285 Q 270,278 261,300 L 251 257 Z" 
          className={selectedRegion.includes('LeftUpperArm') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('LeftUpperArm')}
        />

        {/* Right Forearm */}
        <path 
          d="M 110 310 Q 117,342 138,327 L 124 372 Q 116,357 104,364 Z" 
          className={selectedRegion.includes('RightForearm') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('RightForearm')}
        />

        {/* Left Forearm */}
        <path 
          d="M 264 321 Q 281,345 294,316 L 297 363 Q 285,357 278,370 Z" 
          className={selectedRegion.includes('LeftForearm') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('LeftForearm')}
        />

        {/* Right Hand */}
        <path 
          d="M 94 392 Q 101,415 117,408 L 113 428 Q 106,479 104,446 Q 98,478 97,453 Q 87,480 92,446 Q 81,473 85,446 L 90 414 Q 83,426 76,425 Q 72,420 82,410 Q 90,392 94,392 Z" 
          className={selectedRegion.includes('RightHand') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('RightHand')}
        />

        {/* Left Hand */} 
        <path 
          d="M 285 407 Q 302,414 307,392 Q 313,392 318,407 Q 330,420 325,425 Q 322,430 312,412 L 320 449 Q 323,466 313,447 Q 318,482 305,446 Q 307,483 298,440 Q 298,482 289,431 Q 285,420 285,407 Z" 
          className={selectedRegion.includes('LeftHand') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('LeftHand')}
        />

        {/* Right Upper Leg */}
        <path 
          d="M 148 405 L 201 430 L 187 560 Q 187,538 170,535 Q 156,538 155,554 Q 140,482 148,405 Z" 
          className={selectedRegion.includes('RightUpperLeg') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('RightUpperLeg')}
        />

        {/* Left Upper Leg */}
        <path 
          d="M 201 429 L 254 404 Q 260,528 246,547 Q 245,538 230,535 Q 217,540 216,554 Z" 
          className={selectedRegion.includes('LeftUpperLeg') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('LeftUpperLeg')}
        />

        {/* Right Lower Leg */}
        <path 
          d="M 154 570 Q 160,582 170,584 Q 176,581 183,575 Q 181,580 184,628 Q 185,635 182,645 Q 175,660 172,702 Q 163,690 153,700 Q 140,600 154,570 Z" 
          className={selectedRegion.includes('RightLowerLeg') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('RightLowerLeg')}
        />

        {/* Left Lower Leg */}
        <path 
          d="M 220 577 Q 236,594 248,570 Q 260,610 250,701 Q 240,693 231,702 Q 230,675 225,660 Q 218,635 220,620 Z" 
          className={selectedRegion.includes('LeftLowerLeg') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('LeftLowerLeg')}
        />

        {/* Right Foot */}
        <path 
          d="M 149 736 Q 157,753 173,740 Q 176,757 167,761 Q 160,763 150,780 Q 135,782 130,771 Q 126,764 132,760 Z" 
          className={selectedRegion.includes('RightFoot') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('RightFoot')}
        />

        {/* Left Foot Q 270,780 254,780*/}
        <path 
          d="M 229 738 Q 242,754 252,738 Q 288,772 265,778 Q 255,784 243,765 Q 222,754 229,738 Z" 
          className={selectedRegion.includes('LeftFoot') ? 'bodymap-svg-active' : 'bodymap-svg-region'}
          onClick={() => handleSelection('LeftFoot')}
        />

      </svg>

      {/* 3. HTML CIRCLE JOINTS LAYER */}
      {/* We use an array to map the joints to keep the code clean Q 167,694 162,697*/}
      {joints.map((joint) => (
        <div
          key={joint.id}
          className="bodymap-joint-marker"
          onClick={() => handleSelection(joint.label)}
          style={{
            top: joint.top,
            left: joint.left,
            backgroundColor: selectedRegion.includes(joint.label) ? 'rgba(39, 174, 96, 0.5)' : 'transparent',
            borderColor: selectedRegion.includes(joint.label) ? '#27ae60' : '#333',
          }}
          title={joint.label}
        />
      ))}
    </div>
  );
}

// Data for the joint circles
const joints = [
  { id: 'sh-l', label: 'Left Shoulder', top: '22.8%', left: '35.8%' },
  { id: 'sh-r', label: 'Right Shoulder', top: '22.8%', left: '64.4%' },
  { id: 'el-l', label: 'Left Elbow',    top: '38.4%', left: '31.7%' },
  { id: 'el-r', label: 'Right Elbow',    top: '38.4%', left: '69.5%' },
  { id: 'wr-l', label: 'Left Wrist',    top: '48.2%',   left: '27.4%' },
  { id: 'wr-r', label: 'Right Wrist',    top: '48.2%',   left: '72.6%' },
  { id: 'kn-l', label: 'Left Knee',     top: '70%',   left: '42.5%' },
  { id: 'kn-r', label: 'Right Knee',     top: '70%',   left: '58.1%' },
  { id: 'an-l', label: 'Left Ankle',    top: '90.1%',   left: '40.5%' },
  { id: 'an-r', label: 'Right Ankle',    top: '90.1%',   left: '60%' },
];



export default BodyMap;