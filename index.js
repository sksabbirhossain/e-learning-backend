const express = require("express");
const courses = require("./data/courses.json")
const cors = require("cors")
const app = express();
// app.use(cors());

// route
app.get("/", (req, res) => {
  res.send("hello world");
});
// get all courses
app.get('/api/courses', (req, res) => {
  res.send(courses)
})

// listening server
app.listen("5000", () => {
  console.log("listening port 5000");
});
