
  const mongoose = require('mongoose');

  const examSchema = new mongoose.Schema({
    examId: String,
    patientId: String,
    keyFindings: String,
    brixiaScores: String,
    imageURL: String
});
  
const Exam = mongoose.model('Exam', examSchema);