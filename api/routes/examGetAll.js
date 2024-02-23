// API endpoint to get all exams

const express = require('express');
const mongoose = require('mongoose');
const Exam = require('./models/Exam'); 
app.get('/api/exams', async (req, res) => {
    try {
      const exams = await Exam.find();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  