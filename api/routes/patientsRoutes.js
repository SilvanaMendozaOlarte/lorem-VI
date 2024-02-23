const express = require('express');
const router = express.Router();
const Patient = require('./models/Patient');

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;