const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        firstName: { type: String, required: true},
        middleName: { type: String, required: false},
        lastName: { type: String, required: true},
        age: { type: Number, required: true},
        email: { type: String, required: true},
        gender: { type: Option, required:true, default: "Female"},
        createdAt: { type: String, required: true},
        updatedAt: { type: String, required: true}
    },
    {
        versionKey: false
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;