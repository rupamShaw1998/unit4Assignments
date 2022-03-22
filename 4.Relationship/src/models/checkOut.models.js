const mongoose = require("mongoose");

const checkOutSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true
        },
        checkOutTime: {type: String, required: true},
        checkInTime: { type: String, required:true}
    },
    {
        versionKey: false
    }
);

const Checkout = mongoose.model("checkout", checkOutSchema);

module.exports = Checkout;