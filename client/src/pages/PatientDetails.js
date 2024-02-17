import React, { useEffect, useState } from "react";
import ExamTable from '../components/ExamTable.js';
import './patientDetails.css';

const PatientDetails = () => {

    return ( 
        <div className="patientDetails">
            <h1>Patient Details</h1>
            <h3>Patient ID: {}</h3>
            <h3>Number of Exams: {}</h3>
            <ExamTable />
            
        </div>
     );
}
 
export default PatientDetails;