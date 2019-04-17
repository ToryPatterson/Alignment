import React from "react";

class Toggle extends React.Component {
  constructor() {
    super();

    this.state = { greeting: true };
    this.handleGreeting = this.handleGreeting.bind(this);
  }

  handleGreeting() {
    this.setState(state => ({
      greeting: !state.greeting
    }));
  }

  render() {
    return (
      <div className="toggle">
        <h2>{this.state.greeting ? "Hello" : "Goodbye"}</h2>
        <button onClick={this.handleGreeting}>Toggle</button>
      </div>
    );
  }
}

export default Toggle;
