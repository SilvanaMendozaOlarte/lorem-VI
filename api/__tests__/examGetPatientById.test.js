const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const app = express();

// Import the get patient route and Patient model
const getPatientRoute = require('../routes/examGetPatientById');
const Patient = require('../models/patientModel');

let mongoServer;
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

    app.use(express.json());
    app.use('/api/patients', getPatientRoute); // Mount the route for testing
}, 30000); // Increase timeout to 30 seconds

afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer) { 
        await mongoServer.stop();
    }
});

describe('GET /api/patients/:patientId', () => {
    let patient;

    beforeEach(async () => {
        patient = new Patient({
            patientId: 'p123',
        });
        await patient.save();
    });

    test('should retrieve a patient by ID', async () => {
        const response = await request(app).get(`/api/patients/${patient.patientId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('patientId', patient.patientId);
    });

});