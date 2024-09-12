import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Building the future of AI together</h1>
        <p>
          AI is transforming the world, and we are leading the charge. We are constructing
          the future of AI as a collective.
        </p>
        <button className="get-started">Get started</button>
      </div>
    </div>
  );
}

export default Header;
