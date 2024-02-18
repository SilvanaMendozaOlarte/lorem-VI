import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import { useApi } from './hooks/use-api';
import ExamTable from './components/ExamTable.js';
import { Box, Heading } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';


//search bar
function Search(){
  const[query,setquery] = useState("");
  const getFilteredExams = (query,exams) => {
    if(!query){
      return exams;
    }
    return exams.filter(exams.name.includes(query))
  }
  const exams = [
    { patientID: 1, examID: 1, keyFindings: 'A note.', brixiaScores: 1, age:1, sex:1, bmi:1, zip:1},
    { patientID: 2, examID: 2, keyFindings: 'A note.', brixiaScores: 2, age:2, sex:1, bmi:1, zip:1},
  ]
  const filteredExams = getFilteredExams(query,exams)

  return(
    <div>
      <label>Search: </label>
      <input type="text" onChange= {e => setquery(e.target.value)} />
    </div>
    );
    
  }

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
        <header className="App-header">
          <p>
            {/* NOTE: when false, does not show update and delete columns              */}
            <ExamTable isAdminTable={true}/>
            {response}
          </p>
        </header>
      </Box>
    </div>
  );
}

export default App;
