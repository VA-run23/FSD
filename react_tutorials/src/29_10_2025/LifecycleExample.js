// LifecycleExample.js
import React, { Component } from 'react';

// Class Component demonstrating lifecycle methods
class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      logs: []
    };
    this.addLog('Constructor: Component is being created');
  }

  // Mounting Phase
  componentDidMount() {
    this.addLog('componentDidMount: Component has been mounted to DOM');
  }

  // Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    this.addLog('shouldComponentUpdate: Deciding if component should update');
    return true; // Return false to prevent update
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.addLog(`componentDidUpdate: Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  addLog = (message) => {
    this.setState(prevState => ({
      logs: [...prevState.logs, `${new Date().toLocaleTimeString()}: ${message}`]
    }));
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  clearLogs = () => {
    this.setState({ logs: [] });
  }

  render() {
    return (
      <div style={{ padding: '20px', border: '2px solid red', margin: '10px' }}>
        <h2>Lifecycle Methods Example (Class Component)</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <h3>Count: {this.state.count}</h3>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.clearLogs} style={{ marginLeft: '10px' }}>Clear Logs</button>
        </div>

        <div>
          <h3>Lifecycle Logs:</h3>
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '10px', 
            maxHeight: '200px', 
            overflowY: 'auto',
            fontFamily: 'monospace',
            fontSize: '12px'
          }}>
            {this.state.logs.map((log, idx) => (
              <div key={idx}>{log}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LifecycleExample;