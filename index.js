//app.js
const express = require("express");
const app = express();
const port = 5000;
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/moo", function (req, res) {
  res.send("Hello World!@@");
});
app.listen(port, function () {
  console.log(`application is listening on port ${port}...`);
});
