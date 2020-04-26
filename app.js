const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const db = mongoose.connect("mongodb://localhost/bookAPI");
const Book = require("./src/models/booksModel");
const bookRouter = require("./src/routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to nodemon my API!");
});

app.listen(port, () => {
  console.log(chalk.bgBlueBright(`Running on port  + ${port}`));
});
