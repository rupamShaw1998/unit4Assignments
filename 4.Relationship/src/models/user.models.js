const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        firstName: { type: String, required: true},
        lastName: { type: String, required: true}
    },
    {
        versionKey: false
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;