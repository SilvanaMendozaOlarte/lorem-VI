// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/examsDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define schema and model for patients
const patientSchema = new mongoose.Schema({
    patientId: String,
    age: Number,
    sex: String,
    zipCode: String,
    bmi: Number
});
  
const Patient = mongoose.model('Patient', patientSchema);
  
  // Define schema and model for exams
  const examSchema = new mongoose.Schema({
    examId: String,
    patientId: String,
    keyFindings: String,
    brixiaScores: String,
    imageURL: String
});
  
const Exam = mongoose.model('Exam', examSchema);

// API endpoint to get all exams
app.get('/api/exams', async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
