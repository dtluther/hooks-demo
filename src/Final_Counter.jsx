import React, { useState, useEffect } from 'react';
import getJokeId, { dadJokeUrl } from './getJokeId';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [joke, setJoke] = useState('');

  useEffect(() => {
    console.log('In useEffect');

    async function fetchAndSetDadJoke() {
      const jokeId = getJokeId(count);
      const response = await fetch(`${dadJokeUrl}/${jokeId}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      const jsonResponse = await response.json();
      setJoke(jsonResponse.joke);
    }

    fetchAndSetDadJoke();
  });

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
      <div className={`counter-box`}>
        <h1>Counter</h1>
        <h3 className="count">{count}</h3>
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
