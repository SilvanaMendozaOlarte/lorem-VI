const express = require('express');
const router = express.Router();
//import exam model
const Exam = require('../models/examModel');

// POST route to add a new exam
router.post('/add', async (req, res) => {
  try {
    const { examId, patientId, keyFindings, brixiaScores, imageURL } = req.body;

    // Create a new exam object
    const newExam = new Exam({
      examId,
      patientId,
      keyFindings,
      brixiaScores,
      imageURL
    });

    // Save the new exam to the database
    const savedExam = await newExam.save();

    // Send back the saved exam as the response
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(500).json({ message: 'Error adding exam', error: error.message });
  }
});

module.exports = router;