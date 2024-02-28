//import express

//import exam model

const mongoose = require("mongoose");

// Define schema and model for exams
const examSchema = new mongoose.Schema({
  patientId: String,
  patientAge: Number,
  patientSex: String,
  patientBMI: Number,
  patientZipCode: String,
  examId: String,
  imageURL: String,
  examDate: Date,
  keyFindings: String,
  brixiaScores: String
});

module.exports = mongoose.model("Exam", examSchema);
