import React from 'react';
import ThemeContext from './context';

export default class ClassicCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div className={`counter-box ${theme}`}>
            <h1>Classic Counter</h1>
            <h3 className="count">{this.state.count}</h3>
            <div className="buttons-box">
              <button
                className="decrease-btn"
                onClick={() => this.setState({ count: this.state.count - 1 })}
              >
                Decrease
              </button>
              <button
                className="increase-btn"
                onClick={() => this.setState({ count: this.state.count + 1 })}
              >
                Increase
              </button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
