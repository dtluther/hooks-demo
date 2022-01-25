import React from 'react';
import ThemeContext from './context';
import getJokeId, { dadJokeUrl } from './getJokeId';

export default class ClassicCounter extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
      joke: '',
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    const joke = this.fetchDadJoke();
    this.setState({ joke });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('in componentDidUpdate');
      const joke = this.fetchDadJoke();
      this.setState({ joke });
    }
  }

  handleIncrease(e) {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrease(e) {
    this.setState({ count: this.state.count - 1 });
  }

  handleNameChange(e) {
    this.setState({ name: e.currentTarget.value });
  }

  async fetchDadJoke() {
    const jokeId = getJokeId(this.state.count);
    const response = await fetch(`${dadJokeUrl}/${jokeId}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    const jsonResponse = await response.json();

    return jsonResponse.joke;
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <section className="demo">
            <h1 className="dad-joke">{this.state.joke}</h1>
            <div className={`counter-box ${theme}`}>
              <h1>Classic Counter</h1>
              <h3 className="count">{this.state.count}</h3>
              <div className="buttons-box">
                <button className="decrease-btn" onClick={this.handleDecrease}>
                  Decrease
                </button>
                <button className="increase-btn" onClick={this.handleIncrease}>
                  Increase
                </button>
              </div>
              <div className="name-box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="name"
                  value={this.state.name}
                  placeholder="Your Name"
                  onChange={this.handleNameChange}
                />
              </div>
            </div>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
