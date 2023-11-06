// Import required packages
const express = require("express");
const app = express();
const port = 3001;

// Define your routes and handlers
app.get("/", (req, res) => {
  res.send("Hello, World! This is a plain text response.");
});

app.get("/api/data", (req, res) => {
  const data = {
    message: "This is a JSON response.",
    timestamp: new Date(),
  };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
