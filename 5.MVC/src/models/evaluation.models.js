const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
  {
    dateOfEvaluation: { type: String, required: false },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "batch"
    }
  },
  {
    versionKey: false,
  }
);

const Evaluation = mongoose.model("evaluation", evaluationSchema);

module.exports = Evaluation;