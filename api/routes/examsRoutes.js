const express = require('express');
const router = express.Router();
const Exam = require('./models/Exam');

router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;