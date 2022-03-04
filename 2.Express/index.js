const express = require("express");
const app = express();

app.get("/home", function (req, res) {
    res.send("Hello");
})

app.get("/books", function (req, res) {
    res.send({
        book1: "Harry Potter",
        book2: "Time Management",
        book3: "Malgudi Days",
        book4: "Wings of Fire"
    })
})

app.listen(5000, ()=>{
    console.log("listening at port 5000");
})