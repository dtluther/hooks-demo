import React from 'react';
import ThemeContext from './context';

export default class ClassicCounter extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(_, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('in componentDidUpdate');
      document.title = `Count: ${this.state.count}`;
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

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
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
        )}
      </ThemeContext.Consumer>
    );
  }
}
