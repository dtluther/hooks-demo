import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './context';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log('In useEffect');
    document.title = `Count: ${count}`;
  }, [count]);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count + 1);
  }

  function handleNameChange(e) {
    setName(e.currentTarget.value);
  }

  return (
    <div className={`counter-box ${theme}`}>
      <h1>Counter</h1>
      <h3 className="count">{count}</h3>
      <div className="buttons-box">
        <button className="decrease-btn" onClick={handleIncrease}>
          Decrease
        </button>
        <button className="increase-btn" onClick={handleDecrease}>
          Increase
        </button>
      </div>
      <div className="name-box">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="name"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}
