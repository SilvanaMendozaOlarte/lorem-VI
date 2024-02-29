import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExamTable from "../components/ExamTable";

const Admin = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await fetch("http://localhost:3001/exams");
      if (!response.ok) {
        throw new Error("Failed to fetch exams");
      }
      const examsData = await response.json();
      setExams(examsData);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleDeleteExam = async (examId) => {
    try {
      const response = await fetch(`http://localhost:3001/exams/${examId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete exam");
      }
      // Refresh exams after deletion
      fetchExams();
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
        <ExamTable exams={exams} onDelete={handleDeleteExam} isAdminTable={true} />
      </div>
    </div>
  );
};

export default Admin;
