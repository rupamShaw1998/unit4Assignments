const express = require("express");
const Students = require("../models/student.models");

const app = express();

app.get("", async (req, res) => {
    try {
        const students = await Students.find().lean().exec();
        return res.status(200).send(students);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

app.post("", async (req, res) => {
    try {
        const students = await Students.create(req.body);
        return res.status(201).send(students);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = app;