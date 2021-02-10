const chalk = require("chalk");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const adminRouter = require("./src/router/adminRouter");

mongoose.connect("mongodb://127.0.0.1:27017/roleBased", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(adminRouter);

app.listen(4400, () => {
  console.log(chalk.green.inverse("Server connected to port"));
});
