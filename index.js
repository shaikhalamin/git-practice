const express = require("express");
const app = express();

// GET route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/new-route", (req, res) => {
  res.send("new route added for testing");
});

app.get("/admin", (req, res) => {
  res.send("admin route added testing");
});

// POST route
app.post("/data", (req, res) => {
  // Handle the POST request and send a response
  res.send("Received POST request");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
