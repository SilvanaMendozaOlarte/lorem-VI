const express = require('express');
const router = express.Router();
// Import exam model
const Exam = require('../models/examModel');

// POST route to add a new exam
router.post('/exams', async (req, res) => {
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

    const savedExam = await newExam.save();

    res.status(201).json(savedExam);
  } catch (error) {
    res.status(500).json({ message: 'Error adding exam', error: error.message });
  }
});

module.exports = router;
