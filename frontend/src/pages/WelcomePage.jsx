import React from 'react';
import './welcome.css'

export default function WelcomePage({ onStart }) {
  return (
    <div className="welcomepage-container">
      {/* Header Section */}

      {/* Main Card */}
      <div className="welcomepage-card">
        <h2>Welcome!</h2>
        
        <p className="welparagraph1">This smart history taking system will guide you through a short health assessment to help us understand your condition.</p>

        <p className="welparagraph2">It only takes around <strong>3 minutes</strong> and your answers are kept confidential.</p>

        <p className="welparagraph3">By continuing, you agree to participate and provide accurate responses.</p>

        <button 
          onClick={onStart}
          className="welcomepage-button"
        >
          Agree & Start
        </button>

        <p className="welparagraph4">
          Your privacy and comfort are our priority.
        </p>
      </div>
    </div>
  );
}