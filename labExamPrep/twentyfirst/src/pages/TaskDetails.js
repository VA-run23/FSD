import React from "react"; 
import { useParams } from "react-router-dom"; 
const tasks = { 
  1: { title: "Learn React Router", description: "Understand routing basics." }, 
  2: { title: "Build a Dashboard", description: "Create a task list view." }, 
  3: { title: "Add Settings Page", description: "Allow user preferences." } 
}; 
function TaskDetails() { 
  const { taskId } = useParams(); 
  const task = tasks[taskId]; 
  if (!task) return <h2>Task not found</h2>; 
  return ( 
    <div> 
      <h2>{task.title}</h2> 
      <p>{task.description}</p> 
    </div> 
  ); 
} 
export default TaskDetails; 