const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];


app.get("/users", (req, res) => {
  res.json(users);
});


app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});


app.post("/users", (req, res) => {
  const { id, name, email, phone } = req.body;

  if (!id || !name || !email) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const newUser = { id, name, email, phone };
  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    data: newUser
  });
});


app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.json({ message: "User deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});