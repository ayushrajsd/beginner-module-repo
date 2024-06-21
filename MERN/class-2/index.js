// Import the Express module
const express = require("express");

// Create an Express application
const app = express();
app.use(express.json());
app.use(express.static("public"));

const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware in the chain
};

// Register the middleware globally for all routes
//   app.use(loggerMiddleware);

// app.use((req, res) => {
//     res.status(404).send("Page not found");
//   });

app.use((req, res) => {
    res.status(404).send("Page not found");
  })

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Received a POST request.");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
];

// POST endpoint to add a new user
app.post("/users", (req, res) => {
  const newUser = req.body;

  // Assign a unique ID to the new user (in a real app, you'd typically use a database)
  const userId = users.length + 1;
  newUser.id = userId;

  // Add the new user to the list
  users.push(newUser);

  res.status(201).json({ message: "User created", user: newUser, users });
});

// DELETE endpoint to delete a user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  // Find the user index by ID
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // Remove the user from the array
  users.splice(userIndex, 1);

  res.json({ message: "User deleted" });
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/special", loggerMiddleware, (req, res) => {
  res.send("This route is special!");
});

app.get("/search", (req, res) => {
  // Access query parameters using req.query
  const queryParams = req.query;
  console.log("Query Parameters:", queryParams);

  // Respond to the client
  res.send(`YOur parameters are: ${JSON.stringify(queryParams)}`);
});

app.get("/users", (req, res) => {
  //   res.json({ users });
  throw new Error("Something went wrong!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});



// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
