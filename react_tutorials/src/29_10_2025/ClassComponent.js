// ClassComponent.js
import React, { Component } from 'react';

// Class Component - ES6 class that extends React.Component
class ClassComponent extends Component {
  render() {
    return (
      <div style={{ padding: '20px', border: '2px solid green', margin: '10px' }}>
        <h2>Class Component</h2>
        <p>This is a class component - an ES6 class that extends React.Component.</p>
        <p>It must have a render() method that returns JSX.</p>
      </div>
    );
  }
}

export default ClassComponent;