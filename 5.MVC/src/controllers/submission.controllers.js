const express = require("express");
const Submission = require("../models/submission.models");
const crud = require("./crud.controllers");

const app = express();

app.get("", async (req, res) => {
    try {
        const submission = await Submission.find().lean().exec();
        return res.status(200).send(submission);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

app.post("", async (req, res) => {
    try {
        const submission = await Submission.create(req.body);
        return res.status(201).send(submission);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

app.use("/:id", crud.get(Submission));
app.use("/highest/:id", crud.highest(Submission));

module.exports = app;