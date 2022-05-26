
import { useState } from 'react';
import './App.css';
import ButtonRandomNumber from './components/ButtonRandomNumber';
import NumberScreen from './components/Number';

function App() {
  const [number,setNumber]= useState(Math.floor(Math.random() * 100) + 1)
  function randomNumber(){
    setNumber( Math.floor(Math.random() * 100) + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
      <NumberScreen>{number}</NumberScreen>
      <ButtonRandomNumber randomNumber={randomNumber}/>
        
      </header>
    </div>
  );
}

export default App;
