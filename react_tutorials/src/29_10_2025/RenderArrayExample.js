// RenderArrayExample.js
import React, { useState } from 'react';

// Rendering lists from simple arrays
function RenderArrayExample() {
  const [fruits] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']);
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div style={{ padding: '20px', border: '2px solid indigo', margin: '10px' }}>
      <h2>Rendering Lists from Arrays</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Fruits List (using map)</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index} style={{ padding: '5px' }}>
              {index + 1}. {fruit}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Numbers Grid</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
          {numbers.map((num) => (
            <div 
              key={num}
              style={{
                padding: '15px',
                backgroundColor: num % 2 === 0 ? '#e3f2fd' : '#fff3e0',
                border: '1px solid #ddd',
                borderRadius: '5px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>Filtered List (Even Numbers)</h3>
        <ul>
          {numbers.filter(num => num % 2 === 0).map(num => (
            <li key={num}>Even Number: {num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RenderArrayExample;