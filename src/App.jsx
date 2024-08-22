import React, { useState } from 'react';
import './App.css';

function App() {
  // State to keep track of the current background color
  const [bgColor, setBgColor] = useState('#ffffff');

  // Function to change the background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{justifyContent: 'center', alignItems: 'center',color:'##6e6c6b'}}>Click Button to Change Background</h1>
      <div className="button-container">
        <button onClick={() => changeColor('#f71c0c')} className="color-button" style={{ backgroundColor: '#f71c0c' }}>
          Red
        </button>
        <button onClick={() => changeColor('#99ff99')} className="color-button" style={{ backgroundColor: '#99ff99' }}>
          Green
        </button>
        <button onClick={() => changeColor('#6b83fa')} className="color-button" style={{ backgroundColor: '#6b83fa' }}>
          Blue
        </button>
        <button onClick={() => changeColor('#ffff99')} className="color-button" style={{ backgroundColor: '#ffff99', color: '#000' }}>
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
