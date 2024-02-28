//we might need to update this later 
const express = require('express');
const router = express.Router();
//exam model
const Exam = require('../models/examModel');

// PUT route to update a specific exam by examId
router.put('/api/exams/update/:id', async (req, res) => {
  try {
    const examId = req.params.examId;
    const updateData = req.body;

    // Find the document by ID and update it with the request body
    const updatedExam = await Exam.findByIdAndUpdate(examId, updateData, { new: true });

    // If no document found, send a 404 response
    if (!updatedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    // Send back the updated document
    res.json(updatedExam);
  } catch (error) {
    res.status(500).json({ message: 'Error updating exam', error: error.message });
  }
});

module.exports = router;
