const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "./.env" });

// Use the PORT from the .env file or fallback to 3001 if not available
const port = process.env.PORT || 3001;

// Connect to MongoDB using DB_URL from .env file
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//use cors
app.use(express.json());
const cors = require("cors");
app.use(cors());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  // Log the database name to confirm the right database
  console.log(`Database Name: ${db.name}`);
});

const getExamByIdRoute = require("./routes/examGetPatientById"); //needs to be duplicated
const updateExamByIdRoute = require("./routes/examUpdate");
const deleteExamByIdRoute = require("./routes/examDeleteById");
const getAllExamsRoute = require("./routes/examGetAll");
const addExam = require("./routes/examAdd");

// API endpoint to get all exams
app.get("/exams", async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Define route handler for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to My Application"); // Example: Sending a simple welcome message
});

// Define route handler for handling POST requests to the root URL
const Exam = require("./models/examModel");
app.post("/", async (req, res) => {
  try {
    const { examId, patientId, keyFindings, brixiaScores, imageURL } = req.body;

    // Create a new exam object
    const newExam = new Exam({
      examId,
      patientId,
      keyFindings,
      brixiaScores,
      imageURL,
    });

    // Save the new exam to the database
    const savedExam = await newExam.save();

    // Send back the saved exam as the response
    res.status(201).json(savedExam);
  } catch (error) {
    // Handle any errors that occur during the process
    res
      .status(500)
      .json({ message: "Error adding exam", error: error.message });
  }
});

// GET route to fetch a specific exam by examId
app.get("/exams/:id", async (req, res) => {
  try {
    const examId = req.params.id;

    // Find the document by examId
    const exam = await Exam.findOne({ examId });

    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Send the exam data as the response
    res.json(exam);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching exam", error: error.message });
  }
});

// DELETE route to delete a specific exam by examId
app.delete("/exams/:id", async (req, res) => {
  try {
    const examId = req.params.id; // Get the examID from the request parameters

    // Find the document by examID and delete it
    const deletedExam = await Exam.findOneAndDelete({ examId });

    // If no document found, send a 404 response
    if (!deletedExam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Send back the deleted document
    res.json(deletedExam);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting exam", error: error.message });
  }
});

// PUT route to update a specific exam by examId
app.put("/exams/:id", async (req, res) => {
  try {
    const examId = req.params.id;
    const updateData = req.body;

    // Find the document by ID and update it with the request body
    const updatedExam = await Exam.findOneAndUpdate({ examId }, updateData, {
      new: true,
    });

    // If no document found, send a 404 response
    if (!updatedExam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Send back the updated document
    res.json(updatedExam);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating exam", error: error.message });
  }
});

// Use routes with different paths
app.use("/api/exams", getAllExamsRoute);
app.use("/exams", addExam);
app.use("/api/exams/delete/:id", deleteExamByIdRoute);
app.use("/api/exams/update/:id", updateExamByIdRoute);
app.use("/api/exams/get/:id", getExamByIdRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
