import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
import './examDetails.css';
import { Editable, EditableInput, EditableTextarea, EditablePreview } from '@chakra-ui/react'

const examUpdate = () => {
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
                <Editable defaultValue={patientExamData.patientInfo.patientID} />
                <p>Age: </p>
                <Editable defaultValue={patientExamData.patientInfo.age} />
                <p>Sex: </p>
                <Editable defaultChecked={patientExamData.patientInfo.sex} />
                <p>BMI: </p>
                <Editable defaultChecked={patientExamData.patientInfo.bmi} />
                <p>Zip Code: </p>
                <Editable defaultChecked={patientExamData.patientInfo.zipCode} />
                
            </div>
            <div className="examInfo">
                <h3>Exam Info</h3>
                <p>Exam ID: {patientExamData.examInfo.examID}</p>
                <Editable defaultChecked={patientExamData.examInfo.examID} />
                <p>Image URL:</p>
                <Editable defaultChecked={patientExamData.examInfo.imageUrl} />
                <img src={patientExamData.examInfo.imageUrl} alt="X-Ray" />
                <p>Date: {patientExamData.examInfo.date}</p>
                <Editable defaultChecked={patientExamData.examInfo.date} />
                <p>Key Findings: {patientExamData.examInfo.keyFindings}</p>
                <Editable defaultChecked={patientExamData.examInfo.keyFindings} />
                <p>Brixia Score: {patientExamData.examInfo.brixiaScore}</p>
                <Editable defaultChecked={patientExamData.examInfo.brixiaScore} />
            </div>
            
        </div>
    );
}
 
export default examUpdate;