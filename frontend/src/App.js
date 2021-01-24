import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setname] = useState('');

  const getName = async () => {
    console.log('hej');
    const response = await fetch('/api/name/');
    if(response) {
     const payload = await response.json();
     setname(payload.name);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HEJ DORIS</h1>
        <button onClick={getName}>Get name</button>
        {name}
      </header>
    </div>
  );
}

export default App;
