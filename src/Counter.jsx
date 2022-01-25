import React, { useState, useEffect, useContext } from 'react';
import getJokeId from './getJokeId';
import ThemeContext from './context';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [joke, setJoke] = useState('');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log('In useEffect');

    async function fetchAndSetDadJoke() {
      const jokeId = getJokeId(count);
      const response = await fetch(`https://icanhazdadjoke.com/j/${jokeId}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      const jsonResponse = await response.json();
      setJoke(jsonResponse.joke);
    }

    fetchAndSetDadJoke();
  }, [count]);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleNameChange(e) {
    setName(e.currentTarget.value);
  }

  return (
    <section className="demo">
      <h1 className="dad-joke">{joke}</h1>
      <div className={`counter-box ${theme}`}>
        <h1>Counter</h1>
        <h3 id="count">{count}</h3>
        <div className="buttons-box">
          <button className="decrease-btn" onClick={handleDecrease}>
            Decrease
          </button>
          <button className="increase-btn" onClick={handleIncrease}>
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
    </section>
  );
}
