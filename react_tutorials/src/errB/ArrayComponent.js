import React, { Component } from "react";

class ArrayComponent extends Component {
  render() {
    const arr = [1, 2, 3];
    const index = 5;

    if (index >= arr.length) {
      throw new Error("Array index out of bound!");
    }

    return <h2>Value: {arr[index]}</h2>;
  }
}

export default ArrayComponent;
