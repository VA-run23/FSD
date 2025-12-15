import React, { Component } from "react";

class DivisionComponent extends Component {
  render() {
    const numerator = 10;
    const denominator = 0;

    if (denominator === 0) {
      throw new Error("Division by zero error!");
    }

    return <h2>Result: {numerator / denominator}</h2>;
  }
}

export default DivisionComponent;
