const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!!");
});
app.get("/login", (req, res) => {
  res.send("Login Page !");
});
app.get("/register", (req, res) => {
  res.send("Registration Page !");
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Server on : http://localhost:3002");
});
