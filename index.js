const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

app.use("*", function (req, res, next) {
  let date = new Date();
  let day = date.getDay(),
    hour = date.getHours();

  if (day === 0 || day === 6 || hour <= 8 || hour >= 16)
    res.sendFile(path.join(__dirname + "/error.html"));
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname + "/service.html"));
});

app.listen(port, () => {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
