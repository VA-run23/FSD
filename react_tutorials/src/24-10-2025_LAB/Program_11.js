import React from 'react';

function DepartmentList() {
  const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Biotechnology'];

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((dept, index) => (
          <li key={index}>{dept}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
