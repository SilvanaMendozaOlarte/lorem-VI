const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const app = express();

const getAllExamsRoute = require('../routes/examGetAll');
const Exam = require('../models/examModel');

let mongoServer;
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);

    app.use(express.json());
    app.use('/api/exams', getAllExamsRoute);
}, 30000); // Increase timeout to 30 seconds

afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer){
        await mongoServer.stop();
    }
});

describe('GET /api/exams', () => {
    test('should retrieve all exams', async () => {
        const response = await request(app).get('/api/exams');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});