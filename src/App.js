import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const time = useTime();
  const [name, setName] = useState('');

  const handleNameInput = e => {
    const formattedName = e.target.value
      .toLowerCase()
      .replace(/[_\s]/, '-')
      .replace(/[^a-z-]/, '')
      .replace(/(.*?)-{2,}(.*)/g, (_, p1, p2) => `${p1}-${p2}`)
      .replace(/^-/, '');
    setName(formattedName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Hi name="Sefa" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{time.toLocaleTimeString()}</p>
        Access Code
        <input value={name} className="App-input" onChange={handleNameInput} />
      </header>
    </div>
  );
}

function Hi({ name }) {
  return <h3>I &lt;3 {name}</h3>;
}

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setTime(new Date()), 40);
  });

  return time;
}

export default App;
