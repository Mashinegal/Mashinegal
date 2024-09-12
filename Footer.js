import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="stats">
        <p>430,000 Users</p>
        <p>1M Estimated additional reach</p>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="avatars">
        {/* Replace with real avatars */}
        <div className="avatar">👤</div>
        <div className="avatar">👤</div>
        <div className="avatar">👤</div>
      </div>
    </div>
  );
}

export default Footer;
