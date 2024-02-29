const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');   // Import express
const app = express();   // Create app as an instance of Express application

// Import the exam route and Exam model
const examRoute = require('../routes/examAdd');
const Exam = require('../models/examModel');

// Set up a MongoDB Memory Server and Express app for testing
let mongoServer;
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

    app.use(express.json());
    app.use('/exams', examRoute); // Mount the route for testing
}, 30000); // Increase timeout to 30 seconds

afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer){
        await mongoServer.stop();
    }
});

describe('POST /exams', () => {
    test('should create a new exam and return it', async () => {
        const newExamData = {
            examId: '12345',
            patientId: 'p123',
            keyFindings: 'Findings',
            brixiaScores: 'Scores',
            imageURL: 'http://example.com/image.jpg'
        };

        const response = await request(app)
            .post('/exams')
            .send(newExamData);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('examId', newExamData.examId);
        expect(response.body).toHaveProperty('patientId', newExamData.patientId);
        

        // Optionally, verify that the exam was actually saved in the database
        const savedExam = await Exam.findOne({ examId: newExamData.examId });
        expect(savedExam).toBeTruthy();
        expect(savedExam.patientId).toBe(newExamData.patientId);        
    });

});
