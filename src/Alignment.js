import React from "react";

class Alignment extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  alignmentStyle(Alignment) {
    this.setState({
      text: Alignment
    });
  }

  render() {
    return (
      <div className="Alignment">
        <h2 style={{ textAlign: this.state.text }}>Align me</h2>
        <button onClick={() => this.alignmentStyle("left")}>Left</button>
        <button onClick={() => this.alignmentStyle("center")}>Middle</button>
        <button onClick={() => this.alignmentStyle("right")}>Right</button>
      </div>
    );
  }
}
export default Alignment;
