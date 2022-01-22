import React from 'react';

export default class ClassicCounter extends React.Component<{}, { count: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="counter-box">
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
    );
  }
}
