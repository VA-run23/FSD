import React from "react"; 
import { Link } from "react-router-dom"; 
 
const tasks = [ 
  { id: 1, title: "Learn React Router" }, 
  { id: 2, title: "Build a Dashboard" }, 
  { id: 3, title: "Add Settings Page" } 
]; 
function Dashboard() { 
  return ( 
    <div> 
      <h2>Dashboard</h2> 
      <ul> 
        {tasks.map(task => ( 
          <li key={task.id}> 
            <Link to={`/task/${task.id}`}>{task.title}</Link> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
export default Dashboard; 