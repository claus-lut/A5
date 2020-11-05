const express = require("express");

const app = express();

// Use pug as view engine
app.set("view engine", "pug");

//app.get("/", (req, res) => {
//  res.send("hellotttte test");
//});

app.get("/", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/qwe", (req, res) => {
  res.send("qweqweqwe");
});

app.listen(8080);
