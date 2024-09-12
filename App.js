import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <div className="visual-section">
          {/* This would be where your 3D illustration goes */}
          <div className="visual-element">
            <p>3D Model here</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

  export default App;

<div className="visual-section">
  <img src="path_to_image.png" alt="3D Model" className="visual-image" />
</div>




