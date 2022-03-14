const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
        name: { type: String, required: true},
        address: { type: String, required: true},
        IFSC: { type: String, required: true},
        MICR: { type: Number, required: true},
        createdAt: { type: String, required: true},
        updatedAt: { type: String, required: true}
    },
    {
        versionKey: false
    }
);

const branch = mongoose.model("BranchDetail", branchSchema);

module.exports = branch;