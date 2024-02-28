const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config({ path: "./.env" });

// Use the PORT from the .env file or fallback to 3001 if not available
const port = process.env.PORT || 3001;

// Connect to MongoDB using DB_URL from .env file
mongoose.connect(process.env.DB_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

//use cors
app.use(express.json())
const cors = require('cors');
app.use(cors());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // Log the database name to confirm the right database
  console.log(`Database Name: ${db.name}`);
});

const getExamByIdRoute = require('./routes/examGetPatientById');
const updateExamByIdRoute = require('./routes/examUpdate');
const deleteExamByIdRoute = require('./routes/examDeleteById');
const getAllExamsRoute = require('./routes/examGetAll');
const addExam = require('./routes/examAdd');

// Use routes
app.use('/exams', getAllExamsRoute);
app.use('/exams', getExamByIdRoute);
app.use('/api/exams/:id', deleteExamByIdRoute);
app.use('/api/exams/:id', updateExamByIdRoute);
//create exam
app.use('/exams', addExam);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});