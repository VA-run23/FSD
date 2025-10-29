// HooksExample.js
import React, { useState, useEffect, useRef } from 'react';

// Demonstrating multiple React hooks
function HooksExample() {
  // useState Hook - for state management
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useRef Hook - for accessing DOM elements and persisting values
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  // useEffect Hook - for side effects
  useEffect(() => {
    // This runs after every render
    renderCount.current = renderCount.current + 1;
    console.log('Component rendered');
  });

  useEffect(() => {
    // This runs only once after initial render (like componentDidMount)
    console.log('Component mounted');
    document.title = `Count: ${count}`;
    
    return () => {
      // Cleanup function (like componentWillUnmount)
      console.log('Cleanup');
    };
  }); // Empty dependency array

  useEffect(() => {
    // This runs when count changes
    document.title = `Count: ${count}`;
  }, [count]); // Runs when count changes

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: '20px', border: '2px solid teal', margin: '10px' }}>
      <h2>React Hooks Example</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <h3>useState Hook</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>useRef Hook</h3>
        <input ref={inputRef} type="text" placeholder="Focus me!" />
        <button onClick={focusInput} style={{ marginLeft: '10px' }}>Focus Input</button>
        <p>Component rendered {renderCount.current} times</p>
      </div>

      <div>
        <h3>useEffect Hook</h3>
        <p>Check browser console and document title for effects</p>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something"
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
}

export default HooksExample;