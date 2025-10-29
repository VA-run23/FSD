// RenderObjectsArray.js
import React, { useState } from 'react';

// Rendering lists from array of objects
function RenderObjectsArray() {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', active: true },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', active: false },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Developer', active: true },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', role: 'Tester', active: false }
  ]);

  const [products] = useState([
    { id: 101, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
    { id: 102, name: 'Phone', price: 699, category: 'Electronics', inStock: true },
    { id: 103, name: 'Desk', price: 299, category: 'Furniture', inStock: false },
    { id: 104, name: 'Chair', price: 199, category: 'Furniture', inStock: true }
  ]);

  return (
    <div style={{ padding: '20px', border: '2px solid brown', margin: '10px' }}>
      <h2>Rendering Array of Objects</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3>Users Table</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Email</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Role</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{user.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user.email}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user.role}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <span style={{ 
                    padding: '3px 8px', 
                    borderRadius: '3px',
                    backgroundColor: user.active ? '#4caf50' : '#f44336',
                    color: 'white',
                    fontSize: '12px'
                  }}>
                    {user.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Products Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
          {products.map(product => (
            <div 
              key={product.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: product.inStock ? '#ffffff' : '#f5f5f5'
              }}
            >
              <h4 style={{ margin: '0 0 10px 0' }}>{product.name}</h4>
              <p style={{ margin: '5px 0', color: '#666' }}>Category: {product.category}</p>
              <p style={{ margin: '5px 0', fontSize: '20px', fontWeight: 'bold', color: '#2196f3' }}>
                ${product.price}
              </p>
              <p style={{ 
                margin: '10px 0 0 0', 
                color: product.inStock ? 'green' : 'red',
                fontWeight: 'bold'
              }}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RenderObjectsArray;