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

// Require routes
const getAllExamsRoute = require('./routes/examGetAll');
const getExamByIdRoute = require('./routes/examGetPatientById');
const updateExamByIdRoute = require('./routes/examUpdate');
const deleteExamByIdRoute = require('./routes/examDeleteById');

// Use routes
app.use('/api/exams', getAllExamsRoute);
app.use('/api/patients', getExamByIdRoute);
app.use('/api/exams:id', deleteExamByIdRoute);
app.use('/api/exams:id', updateExamByIdRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});