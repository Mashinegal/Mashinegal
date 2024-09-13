// src/components/AIComponent.js
import React from 'react';
import './AIComponent.css';

const AIComponent = () => {
  return (
    <div className="ai-container">
      <div className="ai-placeholder">
        {/* Placeholder for 3D object or visuals */}
      </div>
      <div className="prompt-section">
        <p>AI is generating...</p>
        <div className="prompt-box">
          <input type="text" placeholder="Prompt" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AIComponent;
