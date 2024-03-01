import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateExam() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientId: "",
    patientAge: "",
    patientSex: "",
    patientBMI: "",
    patientZipCode: "",
    examId: "",
    imageURL: "",
    examDate: "",
    keyFindings: "",
    brixiaScores: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the name is either 'examId' or 'patientId', validate that the value contains only numbers
    if (name === "examId" || name === "patientId") {
      // Check if the value is not a number
      if (isNaN(value)) {
        // If not a number, do not update the state
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //! https://lorem-vi.onrender.com/api/
      const response = await fetch("https://lorem-vi.onrender.com/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/admin"); // Navigate to admin page after exam is added
      } else {
        console.error("Failed to add exam:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  const handleRandomExam = () => {
    const randomFormData = {
      // Generate random numbers for patientId and examId
      patientId: Math.floor(Math.random() * 1000000), // Random number between 0 and 999999
      examId: Math.floor(Math.random() * 1000000), // Random number between 0 and 999999
      patientAge: Math.floor(Math.random() * 100) + 1,
      patientSex: Math.random() < 0.5 ? "Male" : "Female",
      patientBMI: (Math.random() * (40 - 15) + 15).toFixed(2),
      patientZipCode: Math.floor(Math.random() * 100000),
      imageURL: "https://example.com/image.jpg",
      examDate: new Date().toISOString().split("T")[0],
      keyFindings: "Random key findings",
      brixiaScores: Math.floor(Math.random() * 10) + 1,
    };
    setFormData(randomFormData); // Update the state with random values
  };

  const handleClick = () => {
    navigate("/admin");
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <button
          className="btn btn-secondary mx-1"
          type="button"
          onClick={handleRandomExam}
        >
          Random Exam
        </button>
        <button
          className="btn btn-danger mx-1"
          type="button"
          onClick={handleClick}
        >
          Cancel
        </button>
      </div>
      <h1 className="text-center mb-4">Create Exam</h1>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h2>Patient Info</h2>
            <div className="mb-3">
              <label htmlFor="patientId" className="form-label">
                Patient ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="patientId"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="patientAge" className="form-label">
                Age:
              </label>
              <input
                type="number"
                className="form-control"
                id="patientAge"
                name="patientAge"
                value={formData.patientAge}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="patientSex" className="form-label">
                Sex:
              </label>
              <input
                type="text"
                className="form-control"
                id="patientSex"
                name="patientSex"
                value={formData.patientSex}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="patientBMI" className="form-label">
                BMI:
              </label>
              <input
                type="text"
                className="form-control"
                id="patientBMI"
                name="patientBMI"
                value={formData.patientBMI}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="patientZipCode" className="form-label">
                ZipCode:
              </label>
              <input
                type="text"
                className="form-control"
                id="patientZipCode"
                name="patientZipCode"
                value={formData.patientZipCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-5">
            <h2>Exam Info</h2>
            <div className="mb-3">
              <label htmlFor="examId" className="form-label">
                Exam ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="examId"
                name="examId"
                value={formData.examId}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageURL" className="form-label">
                Image URL:
              </label>
              <input
                type="text"
                className="form-control"
                id="imageURL"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="examDate" className="form-label">
                Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="examDate"
                name="examDate"
                value={formData.examDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="keyFindings" className="form-label">
                KeyFindings:
              </label>
              <textarea
                className="form-control"
                id="keyFindings"
                rows="3"
                name="keyFindings"
                value={formData.keyFindings}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="brixiaScores" className="form-label">
                Brixia Score:
              </label>
              <input
                type="text"
                className="form-control"
                id="brixiaScores"
                name="brixiaScores"
                value={formData.brixiaScores}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
