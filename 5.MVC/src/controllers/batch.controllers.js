const express = require("express");
const Batch = require("../models/batch.models");

const app = express();

app.get("", async (req, res) => {
    try {
        const batch = await Batch.find().lean().exec();
        return res.status(200).send(batch);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

app.post("", async (req, res) => {
    try {
        const batch = await Batch.create(req.body);
        return res.status(201).send(batch);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = app;