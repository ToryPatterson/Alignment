import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  crement = amt => {
    this.setState({
      count: this.state.count + amt
    });
  };

  render() {
    return (
      <div className="counter">
        <h2>{this.state.count}</h2>
        <button onClick={() => this.crement(1)}>Add</button>
        <button onClick={() => this.crement(-1)}>Sub</button>
      </div>
    );
  }
}

export default Counter;
