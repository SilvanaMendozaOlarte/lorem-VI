const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/examsDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Require routes
const getAllExamsRoute = require('./routes/examGetAll');
const getExamByIdRoute = require('./routes/examGetPatientById');

const updateExamByIdRoute = require('./routes/examUpdate');
const deleteExamByIdRoute = require('./routes/examDeleteById');
const addExam = require('./routes/examAdd');

// Use routes
app.use('/api/exams', getAllExamsRoute); // GET all exams
app.use('/api/exams/:id', getExamByIdRoute); // GET exam by ID

app.use('/api/exams/:id', deleteExamByIdRoute); // DELETE exam by ID
app.use('/api/exams/:id', updateExamByIdRoute); // PUT (update) exam by ID
app.use('/api/exams', addExam); // POST (add) new exam

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 