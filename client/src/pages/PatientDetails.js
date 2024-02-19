import React, { useEffect, useState } from "react";
import ExamTable from '../components/ExamTable.js';
import './patientDetails.css';

const PatientDetails = () => {
  const [exams, setExams] = useState([
    { patientID: 1,
      examID: 1,
      image: "https://hips.hearstapps.com/hmg-prod/images/labrador-puppy-royalty-free-image-1626252338.jpg",
      keyFindings: 'A note.',
      brixiaScores: 1,
      age:1,
      sex:1,
      bmi:1,
      zip:1
    },
    { patientID: 2,
      examID: 2,
      image: "https://hips.hearstapps.com/hmg-prod/images/labrador-puppy-royalty-free-image-1626252338.jpg",
      keyFindings: 'A note.',
      brixiaScores: 2,
      age:2,
      sex:1,
      bmi:1,
      zip:1
    }
  ]);

  const columns = [
        {
          accessorKey: 'patientID',
          header: 'Patient ID',
          cell: (props) => <p>{props.getValue()}</p>
        },
        {      
          accessorKey: 'examID',
          header: 'Exam ID',
          cell: (props) => <p>{props.getValue()}</p>
        },
        {      
          accessorKey: 'image',
          header: 'Image',
          cell: (props) => {
            return <img src={`${props.row.original.image}`} alt="exam" style={{ maxWidth: '60px' }} />;}
      
        },
        {      
          accessorKey: 'keyFindings',
          header: 'Key Findings',
          cell: (props) => <p>{props.getValue()}</p>
        },
        {      
          accessorKey: 'brixiaScores',
          header: 'Brixia Scores',
          cell: (props) => <p>{props.getValue()}</p>
        },
        {      
          accessorKey: 'age',
          header: 'Age',
          cell: (props) => <p>{props.getValue()}</p>
        },
        {      
          accessorKey: 'sex',
          header: 'Sex',
          cell: (props) => <p>{props.getValue()}</p>
        },
        {      
          accessorKey: 'bmi',
          header: 'BMI',
          cell: (props) => <p>{props.getValue()}</p>
        },
        {      
          accessorKey: 'zip',
          header: 'Zip Code',
          cell: (props) => <p>{props.getValue()}</p>
        },
      ]

    return ( 
        <div className="patientDetails">
            <h1>Patient Details</h1>
            <h3>Patient ID: {}</h3>
            <h3>Number of Exams: {}</h3>
            <ExamTable exams={exams}/>
            
        </div>
     );
}
 
export default PatientDetails;