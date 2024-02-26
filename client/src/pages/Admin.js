import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExamTable from '../components/ExamTable';
import { getAllExams, deleteExam } from '../api/examApi'; // Import API functions for CRUD operations

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
            const examsData = await getAllExams(); // Call API function to get all exams
            setExams(examsData);
        } catch (error) {
            console.error('Error fetching exams:', error);
        }
    };

    // Function to handle delete exam action
    const handleDeleteExam = async (examId) => {
        try {
            await deleteExam(examId); // Call API function to delete exam
            fetchExams(); // Refresh exams after deletion
        } catch (error) {
            console.error('Error deleting exam:', error);
        }
    };

    return (
        <div>
            <div>
                <Link to="/exams/create" className="btn btn-primary mx-1">Create Exam</Link>
            </div>
            <div>
                <ExamTable exams={exams} onDelete={handleDeleteExam} isAdminTable={true}/>
            </div> 
        </div>
    );
};

export default Admin;
