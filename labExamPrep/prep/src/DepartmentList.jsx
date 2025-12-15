import React from "react"; 
function DepartmentList() { 
  // Step 1: Define the array of departments 
  const departments = ["CSE", "ECE", "MECH", "CIVIL"]; 
 
  // Step 2: Return JSX with iteration 
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