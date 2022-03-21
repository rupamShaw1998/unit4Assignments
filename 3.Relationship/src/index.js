const mongoose = require("mongoose");
const express = require("express");
const app =express();
app.use(express.json());

const bookController = require("./controllers/book.controllers");
app.use("/books", bookController);

module.exports = app;
