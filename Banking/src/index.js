const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect("")
}

app.use()