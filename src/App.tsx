import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <Button text='Click Left' />
      {/* <Button text='Click Right' onClick={() => alert('Clicked')} /> */}
    </div>
  );
}

export default App;
