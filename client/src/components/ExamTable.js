import React, { useState, useEffect, useMemo } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { Button } from "@chakra-ui/react";
import { NavLink, Link } from 'react-router-dom'
import Search from './Search'
import '../index.css';

function ExamTable({ isAdminTable, patient_id, setNumExams }) {
  const [exams, setExams] = useState([]);
  const [globalFilters, setGlobalFilters] = useState('');

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await fetch('https://lorem-vi.onrender.com/exams'); // Assuming your API endpoint is at this URL
      if (!response.ok) {
        throw new Error('Failed to fetch exams');
      }
      const data = await response.json();
      setExams(data);
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };
  const handleDeleteExam = async (examId) => {
    try {
      // Make a DELETE request to delete the exam with the specified ID
      const response = await fetch(`https://lorem-vi.onrender.com/exams/${examId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete exam');
      }
      // Refresh the list of exams after successful deletion
      fetchExams();
    } catch (error) {
      console.error('Error deleting exam:', error);
    }
  };

  const mainColumns = [
    {
      accessorKey: 'patientId', // Update accessor key for patientId
      header: 'Patient ID',
      cell: (props) => <p><NavLink to={`/patient/${props.getValue()}`}>{props.getValue()}</NavLink></p>
    },
    {      
      accessorKey: 'examId', // Update accessor key for examId
      header: 'Exam ID',
      cell: (props) => <p><NavLink to={`/exam/${props.getValue()}`}>{props.getValue()}</NavLink></p>
    },
    {      
      accessorKey: 'imageURL', // Update accessor key for imageURL
      header: 'Image',
      cell: (props) => {
        return <img src={`${props.row.original.imageURL}`} alt="exam" style= {{ maxWidth: '100px' }}  />;}
    },
    {      
      accessorKey: 'keyFindings', // Update accessor key for keyFindings
      header: 'Key Findings',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {      
      accessorKey: 'brixiaScores', // Update accessor key for brixiaScores
      header: 'Brixia Scores',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {      
      accessorKey: 'patientAge',
      header: 'Age',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {      
      accessorKey: 'patientSex',
      header: 'Sex',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {      
      accessorKey: 'patientBMI',
      header: 'BMI',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {      
      accessorKey: 'patientZipCode',
      header: 'Zip Code',
      cell: (props) => <p>{props.getValue()}</p>
    },
    // Remaining columns with updated accessor keys as needed
  ];
  
  const adminColumns = [
    {
      accessorKey: 'update',
      header: 'Update',
      cell: (props) => (
        <Link to={`/exam/${props.row.original.examId}/update`}>
          <Button colorScheme="teal" variant="solid" size="sm" >
            Update
          </Button>
        </Link>
      ),
    },
    {
      accessorKey: 'delete',
      header: 'Delete',
      cell: (props) => (
        <Button 
          colorScheme="red" 
          variant="solid" 
          size="sm"
          onClick={() => handleDeleteExam(props.row.original.examId)} // Call delete function with exam ID
        >
          Delete
        </Button>
      ),
    },
  ];

  const columns = isAdminTable ? [...mainColumns, ...adminColumns] : mainColumns;

  const filteredData = useMemo(() => {
    if (patient_id) {
      const data = exams.filter(item => item.patientId === patient_id);
      setNumExams(data.length);
      return data;
    }
    return exams;
  }, [exams, patient_id, setNumExams]);

  const table = useReactTable({
    columns,
    data: filteredData,
    state: {
      globalFilter: globalFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilters,
  });

  return (
    <div>
      <Search 
        globalFilters={globalFilters}
        setGlobalFilters={setGlobalFilters}
      />
      <div className="examTable">
        <table w="full" minWidth="1000px">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                <th key={header.id} style={{ minWidth: header.getSize() }}>
                  {flexRender(
                    header.column.columnDef.header, 
                    header.getContext())}
                </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} style={{ minWidth: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Button 
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
          colorScheme="blue" 
          variant="solid" 
          size="md">
          Previous
        </Button>
        <span>
          {" "} Page {" "} {table.getState().pagination.pageIndex + 1} of {" "}
          {table.getPageCount()} {" "}
        </span>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
          colorScheme="blue" 
          variant="solid" 
          size="md">
          Next
        </Button>
      </div>
    </div>
  );
}

export default ExamTable;
