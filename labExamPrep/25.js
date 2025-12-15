const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/a123B");

// Course Schema with validation
const Course = mongoose.model("Course", {
  courseName: { type: String, required: true },
  faculty: { type: String, required: true },
  credits: { type: Number, required: true },
  studentsEnrolled: { type: Number, required: true }
});

// CREATE course
app.post("/courses", async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

// VIEW all courses
app.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// UPDATE course (validators enabled)
app.put("/courses/:id", async (req, res) => {
  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  res.json(updatedCourse);
});

// DELETE course
app.delete("/courses/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.send("Course deleted");
});

// TOTAL students across all courses
app.get("/courses/totalStudents", async (req, res) => {
  const courses = await Course.find();
  let total = 0;
  courses.forEach(c => total += c.studentsEnrolled);
  res.json({ totalStudents: total });
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
