const express = require("express");

const app = express();

// route
app.get("/", (req, res) => {
  res.send("hello world");
});

// listening server
app.listen("5000", () => {
  console.log("listening port 5000");
});
