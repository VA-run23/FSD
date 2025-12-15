// 24. Develop an Express.js API for Teacher Records that performs CRUD operations:  
// i. Add routes to create, fetch all, fetch by ID, update, and delete teacher details.  
// ii. Ensure JSON data is parsed using middleware and invalid requests return 
// error messages.  
// iii. Include fields: name, department, experience, and email.  
// iv. Return meaningful success messages for each action. 

const express = require("express");
const app = express();

app.use(express.json()); // JSON middleware

let teachers = [];
let id = 1;

// CREATE teacher
app.post("/teachers", (req, res) => {
  const { name, department, experience, email } = req.body;

  if (!name || !department || !experience || !email)
    return res.status(400).json({ error: "All fields are required" });

  const teacher = { id: id++, name, department, experience, email };
  teachers.push(teacher);

  res.json({ message: "Teacher added successfully", data: teacher });
});

// FETCH all teachers
app.get("/teachers", (req, res) => {
  res.json(teachers);
});

// FETCH teacher by ID
app.get("/teachers/:id", (req, res) => {
  const teacher = teachers.find(t => t.id == req.params.id);
  if (!teacher)
    return res.status(404).json({ error: "Teacher not found" });

  res.json(teacher);
});

// UPDATE teacher
app.put("/teachers/:id", (req, res) => {
  const teacher = teachers.find(t => t.id == req.params.id);
  if (!teacher)
    return res.status(404).json({ error: "Teacher not found" });

  Object.assign(teacher, req.body);
  res.json({ message: "Teacher updated successfully", data: teacher });
});

// DELETE teacher
app.delete("/teachers/:id", (req, res) => {
  const index = teachers.findIndex(t => t.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ error: "Teacher not found" });

  teachers.splice(index, 1);
  res.json({ message: "Teacher deleted successfully" });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));