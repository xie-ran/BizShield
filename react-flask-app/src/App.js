import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the greeting message from Flask backend
    fetch('/greeting')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []); // The empty array means this useEffect will run once when the component is mounted

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;
