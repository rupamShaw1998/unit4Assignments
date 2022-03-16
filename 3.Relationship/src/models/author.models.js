const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
{
    versionKey: false
})

const Author = mongoose.model("author", authorsSchema);

module.exports = Author;