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
