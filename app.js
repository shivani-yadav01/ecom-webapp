const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>🛒 Welcome to Ecom Web App hosted on Azure!</h1>");
});

app.get("/products", (req, res) => {
  res.send("<h2>📦 Product List</h2><ul><li>Phone</li><li>Laptop</li><li>Headphones</li></ul>");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
