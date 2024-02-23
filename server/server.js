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

// Require models
const Patient = require('./models/patientModel');
const Exam = require('./models/examModel');

// Use routes
app.use('/api/exams', examsRoutes);
app.use('/api/patients', patientsRoutes);

// Exam routes
const getAllExamsRoute = require('./routes/examGetAll');
const getExamByIdRoute = require('./routes/examGetPatientById');
const updateExamByIdRoute = require('./routes/examUpdate');
const deleteExamByIdRoute = require('./routes/examDeleteById');

app.use('/api/exams', getAllExamsRoute);
app.use('/api/patients', getExamByIdRoute);
app.use('/api/exams', deleteExamByIdRoute);
app.use('/api/exams', updateExamByIdRoute);


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