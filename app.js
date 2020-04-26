const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

if (process.env.ENV === "Test") {
  // TODO: "This is the BD of Test"
  const db = mongoose.connect("mongodb://localhost/bookAPI_Test");
} else {
  const db = mongoose.connect("mongodb://localhost/bookAPI");
}

const Book = require("./src/models/booksModel");
const bookRouter = require("./src/routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to nodemon my API!");
});

app.server = app.listen(port, () => {
  console.log(chalk.bgBlueBright(`Running on port  + ${port}`));
});

module.exports = app;
