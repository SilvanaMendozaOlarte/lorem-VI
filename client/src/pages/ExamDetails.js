import React from "react";

const ExamDetails = () => {
    // Temporary Dummy data 
    const patientExamData = {
        patientInfo: {
            
        },
        examInfo: {
            
        }
    };

    return ( 
        <div className="examDetails">
            < div className="patientInfo">
                <h3>Patient Info</h3>
            </div>
            < div className="examInfo">
                <h3>Exam Info</h3>
            </div>
            
        </div>
     );
}
 
export default ExamDetails;