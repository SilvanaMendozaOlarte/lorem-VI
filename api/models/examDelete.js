const express = require('express');
const router = express.Router();
const Exam = require('../models/examModel');  

// DELETE route to delete an exam by examId

router.delete('/:examId', async (req, res) => {
  try {
    const examId = req.params.examId;
    const exam = await Exam.findOneAndDelete({ examId: examId });

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.status(200).json({ message: 'Exam deleted successfully', examId: examId });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting exam', error: error.message });
  }
});

module.exports = router;
