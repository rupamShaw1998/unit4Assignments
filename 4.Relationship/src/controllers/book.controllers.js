const express = require("express");
const Book = require("../models/book.models");

const app = express();

app.get("", async(req,res) => {
    try {
        const books = await Book.find().lean().exec();
        return res.status(200).send(books);
    }
    catch(err) {
        return res.status(500).send({message: "something went wrong!"});
    }
});

app.post("", async(req,res) => {
    try {
        const books = await Book.create(req.body);
        return res.status(201).send({book: books});
    } 
    catch(err) {
        return res.status(500).send({message: err.message});

    }
});

app.get("/:id", async(req,res) => {
    try {
        const books = await Book.findById(req.params.id).lean().exec();
        return res.status(200).send(books);
    } 
    catch(err) {
        return res.status(500).send({message: err.message});
    }
});

app.patch("/:id", async(req,res) => {
    try {
        const books = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true}).lean().exec();
        return res.status(200).send(books);
    }
    catch(err) {
        return res.status(500).send({ message: req.message});
    }
});

app.delete("/:id", async(req, res) => {
    try {
        const books = await Book.findByIdAndDelete(req.params.id).lean().exec();
        // db.users.deleteOne({_id: Object('62289988555655555b005555f5555')})
        return res.status(200).send(books);
    }
    catch(err) {
        return res.status(500).send({ message: req.message});
    }
});

module.exports = app;