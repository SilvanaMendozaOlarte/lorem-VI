import React, { useState, useEffect } from "react";
import ExamTable from '../components/ExamTable.js';
import { useParams } from "react-router-dom"
import './patientDetails.css';

const PatientDetails = () => {
  const { id } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [numExams, setNumExams] = useState(0);

  useEffect(() => {
    // Fetch patient data from backend API
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/patients/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [id]);

  return (
    <div className="patientDetails">
      <h1>Patient Details</h1>
      <h3>Patient ID: {id}</h3>
      {patientData && (
        <>
          <p>Name: {patientData.name}</p>
          <p>Date of Birth: {patientData.dateOfBirth}</p>
          <p>Gender: {patientData.gender}</p>
          {/* Add more patient details as needed */}
        </>
      )}
      <h3>Number of Exams: {numExams}</h3>
      <ExamTable patient_id={id} setNumExams={setNumExams} />
    </div>
  );
}

export default PatientDetails;
