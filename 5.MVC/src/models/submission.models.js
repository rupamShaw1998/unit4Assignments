const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    evaluationId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "evaluation"
    },
    studentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: false,
        ref: "student"
    },
    marks: { type: Number, required: true },
    result: { type: String, required: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Submission = mongoose.model("submission", submissionSchema);

module.exports = Submission;