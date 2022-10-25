const express = require("express");
const courses = require("./data/courses.json")
const details = require("./data/deatails.json")
const cors = require("cors")
const app = express();
app.use(cors());

// route
app.get("/", (req, res) => {
  res.send("hello world");
});
// get all courses
app.get('/api/courses', (req, res) => {
  res.send(courses)
})

app.get("/api/courses/:id", (req, res) => {
  const courseId = req.params.id;
  const deatailsCourse = details.filter(items => items.couses_id == courseId)
  res.send(deatailsCourse);
  console.log()
})

// listening server
app.listen("5000", () => {
  console.log("listening port 5000");
});
