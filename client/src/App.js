import React from 'react';
import './App.css';
import { useApi } from './hooks/use-api';
import ExamTable from './components/ExamTable.js';
import { Box, Heading } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes, Navigate, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Search } from './components/Search.js';
import Admin from './pages/Admin.js'
import PatientDetails from './pages/PatientDetails.js';
import ExamUpdate from './pages/ExamUpdate.js';
import ExamDetails from './pages/ExamDetails.js';
import CreateExam from './pages/CreateExam';
import AllExams from './pages/AllExams.js';

function App() {

  return (
    <div className="App">
      <Box maxW={1000} mx="auto" px={6} pt={6} fontSize="sm">
        <header className="App-header">
            <Routes>
              <Route path="/" element={<Navigate to="/exams"/>} />
              <Route path="/exams/create" element={<CreateExam/>} />
              <Route path="/exams" element={<AllExams/>} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/exam/:id" element={<ExamDetails/>}/>
              <Route path="/exam/:id/update" element={<ExamUpdate/>} />
              <Route path="/patient/:id" element={<PatientDetails/>} />
            </Routes>
        </header>
      </Box>
    </div>
  );
}

export default App;
