const mongoose = require("mongoose");

// Define schema and model for exams
const examSchema = new mongoose.Schema({
  examId: String,
  patientId: String,
  keyFindings: String,
  brixiaScores: String,
  imageURL: String,
});

module.exports = mongoose.model("Exam", examSchema);
