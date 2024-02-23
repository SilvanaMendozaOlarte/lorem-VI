const mongoose = require('mongoose');

// Define schema and model for patients
const patientSchema = new mongoose.Schema({
    patientId: String,
    age: Number,
    sex: String,
    zipCode: String,
    bmi: Number
});
  
module.exports = mongoose.model('Patient', patientSchema);