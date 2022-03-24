const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "user" 
    },
    currentBatch: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "batch" 
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
