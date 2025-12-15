 import React from 'react';
 function DepartmentList() {
 const departments = ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL'];
 return (
 <div>
 <h2>List of Departments</h2>
 <ul>
 {departments.map((dept, index) => (
 <li key={index}>{dept}</li>
 ))}
 </ul>
 </div>
 );
 }
 export default DepartmentList;