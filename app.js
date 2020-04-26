const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connect("mongodb://localhost/bookAPI");
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require("./src/models/booksModel");

bookRouter.route("/books").get((req, res) => {
  const query = {};
  if (req.query.genre) {
    query.genre = req.query.genre;
  }
  Book.find(query, (err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });

  //   TODO:  const response = { hello: "This is a test!!" };
  //   res.json(response);
});

bookRouter.route("/books/:bookId").get((req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      return res.send(err);
    }
    return res.json(book);
  });
});

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to nodemon my API!");
});

app.listen(port, () => {
  console.log(chalk.bgBlueBright(`Running on port  + ${port}`));
});
