import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './context';

export default function Counter() {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div className={`counter-box ${theme}`}>
      <h1>Counter</h1>
      <h3 id="count">{count}</h3>
      <div className="buttons-box">
        <button className="decrease-btn" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className="increase-btn" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
}
