import React from "react"; 
import { Routes, Route, Link } from "react-router-dom"; 
import Dashboard from "./pages/Dashboard"; 
import TaskDetails from "./pages/TaskDetails"; 
import Settings from "./pages/Settings"; 
import NotFound from "./pages/NotFound"; 
function App() { 
  return ( 
    <div> 
      {/* Simple Navbar */} 
      <nav> 
        <Link to="/">Dashboard</Link> |{" "} 
        <Link to="/settings">Settings</Link> 
      </nav> 
      {/* Routes */} 
      <Routes> 
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/task/:taskId" element={<TaskDetails />} /> 
        <Route path="/settings" element={<Settings />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes> 
    </div> 
  ); 
} 
export default App;