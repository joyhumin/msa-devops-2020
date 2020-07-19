import React from 'react';
import logo from './logo_mask.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PLEASE WEAR THE MASK
        </p>
        <a
          className="App-link"
          href="https://www.health.govt.nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ministry of Health for more information.
        </a>
      </header>
    </div>
  );
}

export default App;
