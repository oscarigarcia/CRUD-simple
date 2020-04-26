const express = require("express");
const chalk = require("chalk");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to nodemon my API!");
});

app.listen(port, () => {
  console.log(chalk.bgBlueBright(`Running on port  + ${port}`));
});
