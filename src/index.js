const express = require("express");

const app = express();

// Use pug as view engine
app.set("view engine", "pug");

//app.get("/", (req, res) => {
//  res.send("hellotttte test");
//});

var tabletext = "";
var i, j;
var cursor = "x";
var player = 1;

function cellClick() {
  if (this.innerHTML !== "o" && this.innerHTML !== "x") {
    this.innerHTML = cursor; // The function returns the product of p1 and p2
    checkWinner();
    if (cursor == "o") {
      cursor = "x";
      player = 1;
    } else {
      cursor = "o";
      player = 2;
    }
  }
}

function checkWinner() {
  var table = document.getElementById("ttttable");
  // Check columns
  for (var i = 0; i < 5; i++) {
    var winner = true;
    for (var j = 0; j < 5; j++) {
      if (table.rows[i].cells[j].innerHTML !== cursor) {
        winner = false;
      }
    }
    if (winner) {
      alert("Player " + player + " won!");
    }
  }
  // Check rows
  for (var i = 0; i < 5; i++) {
    var winner = true;
    for (var j = 0; j < 5; j++) {
      if (table.rows[j].cells[i].innerHTML !== cursor) {
        winner = false;
      }
    }
    if (winner) {
      alert("Player " + player + " won!");
    }
  }
  // Check diagonal
  for (var i = 0; i < 5; i++) {
    var winner = true;
    if (table.rows[i].cells[i].innerHTML !== cursor) {
      winner = false;
    }
  }
  if (winner) {
    alert("Player " + player + " won!");
  }
}

app.get("/", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/qwe", (req, res) => {
  res.send("qweqweqwe");
});

app.listen(8080);
