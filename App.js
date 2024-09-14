// src/App.js
import React from 'react';
import './App.css';
import AIComponent from './components/AIComponent';

function App() {
  return (
    <div className="app-container">
      {/* Left Side */}
      <div className="left-panel">
        <div className="logo"></div>
        <h1>Building the future of AI together</h1>
        <p>
          AI is transforming the world, and we are leading the charge. We are
          constructing the future of AI as a collective.
        </p>
        <button className="get-started">Get started</button>
        <div className="stats">
          <div className="users">
            <h3>430,000 Users</h3>
            <p>is building Cleverbot together</p>







            import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
          </div>
          <div className="reach">
            <h3>1M Users</h3>
            <p>Estimated additional reach</p>
          </div>
        </div>
        <div className="avatars">
          <div className="avatar"></div>
          <div className="avatar"></div>
          <div className="avatar"></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-panel">
        <AIComponent />
      </div>
    </div>
  );
}

export default App;

