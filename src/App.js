import React from 'react';
import './App.css';
import Counter from './Counter';
import ClassicCounter from './ClassicCounter';
import ThemeContext from './context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeContext.Provider value={'bio-rad'}>
          <Routes>
            <Route path="/classic" element={<ClassicCounter />} />
            <Route path="/hooks" element={<Counter />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
