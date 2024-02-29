const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const app = express();

// Import the delete route and Exam Model
const deleteExamRoute = require('../routes/examDeleteById');
const Exam = require('../models/examModel'); 

let mongoServer;
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

    app.use(express.json());
    app.use('/api/exams/delete', deleteExamRoute); // Mount the route for testing
}, 30000); // Increase timeout to 30 seconds

afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer) {
        await mongoServer.stop();
    }
});


describe('DELETE /api/exams/delete/:id', () => {
    let exam;

    beforeEach(async () => {
        exam = new Exam({
            examId: 'e12345',
            // other exam fields...
        });
        await exam.save();
    });

    test('should delete an exam by ID', async () => {
        const response = await request(app).delete(`/api/exams/delete/${exam._id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('_id', exam._id.toString());

        // Verify the exam is deleted from the database
        const deletedExam = await Exam.findById(exam._id);
        expect(deletedExam).toBeNull();
    });
});