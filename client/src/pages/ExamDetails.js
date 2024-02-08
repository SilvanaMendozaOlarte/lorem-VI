import React from "react";
import './examDetails.css';

const ExamDetails = () => {
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
                <p>Patient ID: {patientExamData.patientInfo.patientID}</p>
                <p>Age: {patientExamData.patientInfo.age}</p>
                <p>Sex: {patientExamData.patientInfo.sex}</p>
                <p>BMI: {patientExamData.patientInfo.bmi}</p>
                <p>Zip Code: {patientExamData.patientInfo.zipCode}</p>
            </div>
            < div className="examInfo">
                <h3>Exam Info</h3>
                <p>Exam ID: {patientExamData.examInfo.examID}</p>
                <img src={patientExamData.examInfo.imageUrl} alt="X-Ray" />
                <p>Date: {patientExamData.examInfo.date}</p>
                <p>Key Findings: {patientExamData.examInfo.keyFindings}</p>
                <p>Brixia Score: {patientExamData.examInfo.brixiaScore}</p>
            </div>
            
        </div>
     );
}
 
export default ExamDetails;