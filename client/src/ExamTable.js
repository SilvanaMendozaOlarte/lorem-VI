// returns the table containing exam data
import { useState } from "react";
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";

const exams = [
  { patientID: 1, examID: 1, keyFindings: 'A note.', brixiaScores: 1, age:1, sex:1, bmi:1, zip:1},
  { patientID: 2, examID: 2, keyFindings: 'A note.', brixiaScores: 2, age:2, sex:1, bmi:1, zip:1},
]
const columns = [
  {
    accessorKey: 'patientID',
    header: 'Patient ID',
    cell: (props) => <p>{props.getValue().patientID}</p>
  },
  {      
    accessorKey: 'examID',
    header: 'Exam ID',
    cell: (props) => <p>{props.getValue().examID}</p>
  },
  {      
    accessorKey: 'keyFindings',
    header: 'Key Findings',
    cell: (props) => <p>{props.getValue().keyFindings}</p>
  },
  {      
    accessorKey: 'brixiaScores',
    header: 'Brixia Scores',
    cell: (props) => <p>{props.getValue().brixiaScores}</p>
  },
  {      
    accessorKey: 'age',
    header: 'Age',
    cell: (props) => <p>{props.getValue().age}</p>
  },
  {      
    accessorKey: 'sex',
    header: 'Sex',
    cell: (props) => <p>{props.getValue().sex}</p>
  },
  {      
    accessorKey: 'bmi',
    header: 'BMI',
    cell: (props) => <p>{props.getValue().bmi}</p>
  },
  {      
    accessorKey: 'zip',
    header: 'Zip Code',
    cell: (props) => <p>{props.getValue().zip}</p>
  },
]


function ExamTable(){
  const[data, setData] = useState(exams)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel:getCoreRowModel()
  });

  return (
    <Box>
      <Box className="table">
          {table.getHeaderGroups().map( (headerGroup) => (
            //table row
            <Box className="tr" key={headerGroup.id}>
              {headerGroup.headers.map( (header) => (
                <Box className="th" key={header.id}>
                  {header.column.columnDef.header}
                </Box>
              ))}
            </Box>
          ))}
          {
            table.getRowModel().rows.map(row => <Box className="tr" key={row.id}>
                {row.getVisibleCells().map( cell => <Box className="td" key={cell.id}> 
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Box>)}
              </Box>)
          }
      </Box>
    </Box>
  )
}
                // {/* data cells */}
                // <td>{exam.patientID}</td> 
                // <td>{exam.examID}</td>
                // <td>{exam.keyFindings}</td>
                // <td>{exam.brixiaScores}</td>
                // <td>{exam.age}</td>
                // <td>{exam.sex}</td>
                // <td>{exam.bmi}</td>
                // <td>{exam.zip}</td>
  
  export default ExamTable;