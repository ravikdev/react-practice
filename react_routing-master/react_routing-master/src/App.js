import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Simple React Router Example</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className='linker'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='linker'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='linker'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
