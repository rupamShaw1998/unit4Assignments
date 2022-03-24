const mongoose = require("mongoose");
const express = require("express");
const app =express();
app.use(express.json());

const bookController = require("./controllers/book.controllers");
const authorController = require("./controllers/author.controllers");
const authorBookController = require("./controllers/authorBook.controllers");
const checkOutController = require("./controllers/checkOut.controllers");
const sectionController = require("./controllers/section.controllers");
const userController = require("./controllers/user.controllers");

app.use("/books", bookController);
app.use("/books", authorController);
app.use("/books", authorBookController);
app.use("/books", checkOutController);
app.use("/books", sectionController);
app.use("/books", userController);

module.exports = app;
