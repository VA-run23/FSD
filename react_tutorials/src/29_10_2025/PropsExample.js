// PropsExample.js
import React from 'react';

// Child Component that receives props
function UserCard({ name, age, email, isActive }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      backgroundColor: isActive ? '#e8f5e9' : '#ffebee'
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

// Parent Component that passes props
function PropsExample() {
  return (
    <div style={{ padding: '20px', border: '2px solid orange', margin: '10px' }}>
      <h2>Props Example</h2>
      <p>Props are used to pass data from parent to child components.</p>
      
      <UserCard 
        name="Alice Johnson" 
        age={28} 
        email="alice@example.com"
        isActive={true}
      />
      
      <UserCard 
        name="Bob Smith" 
        age={35} 
        email="bob@example.com"
        isActive={false}
      />
    </div>
  );
}

export default PropsExample;