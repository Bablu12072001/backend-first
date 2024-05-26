require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello Bablu kumar the first backend program");
});

app.get("/twitter", (req, res) => {
  res.send("bablu");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login the Bablu kumar server </h1>");
});
app.get("/bablu", (req, res) => {
  res.send("<h2>Bablu kumar </h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
