const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: { Type: String, required: true},
        lastName: { Type: String, required: true},
        email: { Type: String, required: true},
        password: { Type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("user", userSchema);