import React from 'react';
import logo from './logo.svg';
import Autocomplete from './components/autocomplete';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Autocomplete />
      </header>
    </div>
  );
}

export default App;
