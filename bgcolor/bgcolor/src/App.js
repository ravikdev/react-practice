import './App.css';
import { useState } from 'react';
function App() {
  let yellow = '#ffc800';
  const [bgColor, setBgColor] = useState(yellow);
   const changeColor =()=>{
      let purple = '#A020F0';
      setBgColor(purple);
    }
  return (
    <div className="App">
      <header className="App-header" style={{background: bgColor}}>
        <button className="btn-style"onClick={changeColor}>Change Color</button>
      </header>
    </div>
  );
}

export default App;

