const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://rupamShaw:rupamshaw@cluster0.1m8be.mongodb.net/Validations?authSource=admin&replicaSet=atlas-ujxab0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
}

module.exports = connect;