import React from 'react';
import ThemeContext from './context';

export default class ClassicCounter extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  handleIncrease(e) {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrease(e) {
    this.setState({ count: this.state.count - 1 });
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
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
