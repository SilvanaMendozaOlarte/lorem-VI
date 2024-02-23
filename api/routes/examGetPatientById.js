// API endpoint to get a patient by IDconst express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

app.get('/api/patients/:patientId', async (req, res) => {
    const { patientId } = req.params;
    try {
      const patient = await Patient.findOne({ patientId: patientId });
      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  