import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import { useApi } from './hooks/use-api';
import ExamTable from './components/ExamTable.js';
import { Box, Heading } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Search } from './components/Search.js';


function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
        <header className="App-header">
          <p>
            <Search />
            {/* NOTE: when false, does not show update and delete columns              */}
            <ExamTable isAdminTable={false}/>
            {response}
          </p>
        </header>
      </Box>
    </div>
  );
}

export default App;
