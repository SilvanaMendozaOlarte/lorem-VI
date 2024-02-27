const express = require('express');
const router = express.Router();
//exam model
const Exam = require('../models/examModel');

// DELETE route to delete a specific exam by examId
router.delete('/api/exams/:id', async (req, res) => {
  try {
    const examId = req.params.examId;

    // Find the document by ID and delete it
    const deletedExam = await Exam.findByIdAndDelete(examId);

    // If no document found, send a 404 response
    if (!deletedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    // Send back the deleted document
    res.json(deletedExam);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting exam', error: error.message });
  }
});

module.exports = router;
