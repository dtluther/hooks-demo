import React from 'react';
import './App.css';
import Counter from './Counter';
import ClassicCounter from './ClassicCounter';
import ThemeContext from './context';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={'bio-rad'}>
        <ClassicCounter />
        {/* <Counter /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
