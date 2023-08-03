const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Routes
app.get("/", (req, res) => {
  res.send("Acaba basardim mi?");
});

app.get("/posts", (req, res) => {
  res.send("Sanirim basardim");
});

//Listening server
app.listen(3000, () => console.log("port calisiyor"));
