import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./examDetails.css";

const ExamUpdate = () => {
  const { id } = useParams(); // Get the exam ID from the URL params
  const navigate = useNavigate();
  const [examData, setExamData] = useState({
    patientId: "",
    patientAge: "",
    patientSex: "",
    patientBMI: "",
    patientZipCode: "",
    examId: "",
    imageURL: "",
    examDate: "",
    keyFindings: "",
    brixiaScores: "", // Updated to match the state property name
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        //! https://lorem-vi.onrender.com/api/exams/${id}
        const response = await fetch(`http://localhost:3001/exams/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch exam data");
        }
        const data = await response.json();
        setExamData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExamData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData((prevExamData) => ({ ...prevExamData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //! https://lorem-vi.onrender.com/api/exams/${id}
      const response = await fetch(`http://localhost:3001/exams/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(examData),
      });

      if (response.ok) {
        navigate("/admin"); // Navigate to admin page after exam is updated
      } else {
        throw new Error("Failed to update exam");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Update Exam</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <button className="btn btn-primary mx-1" type="submit">
            Update
          </button>
          <button
            className="btn btn-danger mx-1"
            type="button"
            onClick={() => navigate("/admin")}
          >
            Cancel
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="patientInfo">
            <h3>Patient Info</h3>
            <p>Patient ID:</p>
            <input
              type="text"
              name="patientId"
              value={examData.patientId}
              onChange={handleChange}
            />
            <p>Age: </p>
            <input
              type="text"
              name="patientAge"
              value={examData.patientAge}
              onChange={handleChange}
            />
            <p>Sex: </p>
            <input
              type="text"
              name="patientSex"
              value={examData.patientSex}
              onChange={handleChange}
            />
            <p>BMI: </p>
            <input
              type="text"
              name="patientBMI"
              value={examData.patientBMI}
              onChange={handleChange}
            />
            <p>Zip Code: </p>
            <input
              type="text"
              name="patientZipCode"
              value={examData.patientZipCode}
              onChange={handleChange}
            />
          </div>

          <div className="examInfo">
            <h3>Exam Info</h3>
            <p>Exam ID: </p>
            <input type="text" name="examId" value={examData.examId} readOnly />
            <p>Image URL:</p>
            <input
              type="text"
              name="imageURL"
              value={examData.imageURL}
              onChange={handleChange}
            />
            <img src={examData.imageURL} alt="X-Ray" />
            <p>Date: </p>
            <input
              type="date"
              name="examDate"
              value={examData.examDate}
              onChange={handleChange}
            />
            <p>Key Findings: </p>
            <input
              type="text"
              name="keyFindings"
              value={examData.keyFindings}
              onChange={handleChange}
            />
            <p>Brixia Score: </p>
            <input
              type="text"
              name="brixiaScores"
              value={examData.brixiaScores}
              onChange={handleChange}
            />{" "}
            {/* Updated to match the state property name */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExamUpdate;
