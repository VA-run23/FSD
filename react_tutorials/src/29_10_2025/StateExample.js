// StateExample.js
import React, { useState } from 'react';

// State in Functional Component using useState hook
function StateExample() {
  // State declaration: [stateVariable, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div style={{ padding: '20px', border: '2px solid purple', margin: '10px' }}>
      <h2>State Example (Functional Component)</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Reset</button>
      </div>

      <div>
        <h3>Name: {name}</h3>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
    </div>
  );
}

export default StateExample;