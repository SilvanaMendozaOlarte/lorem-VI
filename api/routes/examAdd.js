const express = require('express');
const router = express.Router();
const Exam = require('../models/examModel');

router.post('/api/exams', async (req, res) => {
  try {
    const { examId, patientId, keyFindings, brixiaScores, imageURL } = req.body;

    // Check if all required fields are present in the request body
    if (!examId || !patientId || !keyFindings || !brixiaScores || !imageURL) {
      throw new Error("One or more required fields are missing in the request body");
    }

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
