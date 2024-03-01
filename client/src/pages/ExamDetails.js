import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './examDetails.css';

const ExamDetails = () => {
    const { id } = useParams();
    const [examData, setExamData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExamData = async () => {
            try {
                //! https://lorem-vi.onrender.com/api/exams/${id}
                const response = await fetch(`https://lorem-vi.onrender.com/api/exams/${id}`);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="examDetails">
            <div className="patientInfo">
                <h3>Patient Info</h3>
                <p>Patient ID: {examData.patientId}</p> 
                <p>Age: {examData.patientAge}</p> 
                <p>Sex: {examData.patientSex}</p> 
                <p>BMI: {examData.patientBMI}</p> 
                <p>Zip Code: {examData.patientZipCode}</p> 
            </div>
            <div className="examInfo">
                <h3>Exam Info</h3>
                <p>Exam ID: {examData.examId}</p> 
                <img src={examData.imageURL} alt="X-Ray" />
                <p>Date: {examData.examDate}</p> 
                <p>Key Findings: {examData.keyFindings}</p>
                <p>Brixia Scores: {examData.brixiaScores}</p>
            </div>
        </div>
    );
};
export default ExamDetails
