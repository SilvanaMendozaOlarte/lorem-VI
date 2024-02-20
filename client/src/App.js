import React from 'react';
import './App.css';
import { useApi } from './hooks/use-api';
import ExamTable from './components/ExamTable.js';
import { Box, Heading } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Search } from './components/Search.js';
import PatientDetails from './pages/PatientDetails.js';
import ExamUpdate from './pages/examUpdate.js';
import ExamDetails from './pages/ExamDetails.js';


function App() {

  return (
    <div className="App">
      <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
        <header className="App-header">
            {/* NOTE: when false, does not show update and delete columns              */}
            <Routes>
              <Route path="/" element={<ExamTable/>} />
              <Route path="/index" element={<ExamTable isAdminTable={false}/>} />
              <Route path="/admin" element={<ExamTable isAdminTable={true}/>} />
              <Route path="/exam/:id" element={<ExamDetails/>}/>
              <Route path="/exams/create" />
              <Route path="/exam/:id/update" element={<examUpdate/>} />
              <Route path="/patient/:id" element={<PatientDetails/>} />
            </Routes>
        </header>
      </Box>
    </div>
  );
}

export default App;
