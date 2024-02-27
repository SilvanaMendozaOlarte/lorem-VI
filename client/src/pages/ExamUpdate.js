import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
import './examDetails.css';

const ExamUpdate = () => {
    // Temporary Dummy data 
    const patientExamData = {
        patientInfo: {
            patientID: 'COVID-19-MA-123',
            age: '45',
            sex: 'M',
            bmi: '24.5',
            zipCode: '12345'
        },
        examInfo: {
            examID: '456',
            imageUrl: 'https://www.nih.gov/sites/default/files/news-events/news-releases/2017/20170927-lung-mass.jpg', // Placeholder image URL 
            date: '2024-02-06',
            keyFindings: 'Patient key findings details here -- Test is Positive. Lungs ??? .',
            brixiaScore: '4, 5, 6, 7'
        }
    };
    
    return ( 
        <div className="examDetails">
            < div className="patientInfo">
                <h3>Patient Info</h3>
                <p>Patient ID:</p>
                <input defaultValue={patientExamData.patientInfo.patientID} />
                <p>Age: </p>
                <input defaultValue={patientExamData.patientInfo.age} />
                <p>Sex: </p>
                <input defaultValue={patientExamData.patientInfo.sex} />
                <p>BMI: </p>
                <input defaultValue={patientExamData.patientInfo.bmi} />
                <p>Zip Code: </p>
                <input defaultValue={patientExamData.patientInfo.zipCode} />
                
            </div>
            <div className="examInfo">
                <h3>Exam Info</h3>
                <p>Exam ID: </p>
                <input defaultValue={patientExamData.examInfo.examID} />
                <p>Image URL:</p>
                <input defaultValue={patientExamData.examInfo.imageUrl} />
                <img src={patientExamData.examInfo.imageUrl} alt="X-Ray" />
                <p>Date: </p>
                <input defaultValue={patientExamData.examInfo.date} />
                <p>Key Findings: </p>
                <input defaultValue={patientExamData.examInfo.keyFindings} />
                <p>Brixia Score: </p>
                <input defaultValue={patientExamData.examInfo.brixiaScore} />
            </div>
            
        </div>
    );
}
 
export default ExamUpdate;