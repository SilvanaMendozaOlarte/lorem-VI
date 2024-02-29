// API endpoint to get all exams

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
//exam model
const Exam = require('../models/examModel');
router.get('/', async (req, res) => {      // Instead of router.get('/api/exams', async(req, res) ... )
    try {
      const exams = await Exam.find();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
module.exports = router;