import React, { useState } from "react";
import ExamTable from '../components/ExamTable.js';
import { useParams } from "react-router-dom"
import './patientDetails.css';

const PatientDetails = () => {
  const {id} = useParams();
  const [numExams, setNumExams] = useState(0);

    return ( 
        <div className="patientDetails">
            <h1>Patient Details</h1>
            <h3>Patient ID: {id}</h3>
            <h3>Number of Exams: {numExams}</h3>
            <ExamTable patient_id={id} setNumExams={setNumExams}/>
            
        </div>
     );
}
 
export default PatientDetails;