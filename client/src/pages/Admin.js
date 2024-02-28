import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExamTable from "../components/ExamTable";

const Admin = () => {
    
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);

  // Function to fetch all exams when component mounts
  useEffect(() => {
    fetchExams();
  }, []);

  // Function to fetch all exams
  const fetchExams = async () => {
    try {
      const response = await fetch("/api/exams"); // Make a GET request to the server's API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch exams");
      }
      const examsData = await response.json();
      setExams(examsData);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  // Function to handle delete exam action
  const handleDeleteExam = async (examId) => {
    try {
      await fetch(`/api/exams/${examId}`, { method: "DELETE" }); // Make a DELETE request to the server's API endpoint
      fetchExams(); // Refresh exams after deletion
    } catch (error) {
      console.error("Error deleting exam:", error);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <Link to="/exams/create" className="btn btn-primary mx-1">
          Create Exam
        </Link>
      </div>
      <div>
        <ExamTable
          exams={exams}
          onDelete={handleDeleteExam}
          isAdminTable={true}
        />
      </div>
    </div>
  );
};

//  getAlExams function makes HTTP requests to backend endpoints
const getAllExams = async () => {
    try {
        const response = await fetch('/api/exams');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching exams:', error);
        throw error;
    }
};

const deleteExam = async (examId) => {
    try {
        const response = await fetch(`/api/exams/${examId}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting exam:', error);
        throw error;
    }
};

export default Admin;
