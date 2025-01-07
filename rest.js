// Importing required modules
const express = require("express");
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Mock in-memory database
let items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
];

// Create - Add a new item
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1, // Simple ID generation
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read - Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Read - Get a single item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

// Update - Modify an existing item
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  item.name = req.body.name || item.name;
  item.description = req.body.description || item.description;
  res.json(item);
});

// Delete - Remove an item
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items.splice(itemIndex, 1);
  res.status(204).send(); // No content response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
