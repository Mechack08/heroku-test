const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!!");
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Server on : http://localhost:3002");
});
