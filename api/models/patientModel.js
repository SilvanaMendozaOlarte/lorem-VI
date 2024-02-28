const mongoose = require("mongoose");

// Define schema and model for patients
const patientSchema = new mongoose.Schema({
  patientId: String,
  patientAge: Number,
  patientSex: String,
  patientBMI: Number,
  patientZipCode: String,
});

module.exports = mongoose.model("Patient", patientSchema);
