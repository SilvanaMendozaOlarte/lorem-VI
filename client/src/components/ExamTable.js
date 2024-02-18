// returns the table containing exam data
import { useState } from "react";
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";

const exams = [
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
]
const mainColumns = [
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

const adminColumns = [
  {
    accessorKey: 'update',
    header: 'Update',
    cell: (props) => (
      <Button colorScheme="teal" variant="solid" size="sm" >
        Update
      </Button>
    ),
  },
  {
    accessorKey: 'delete',
    header: 'Delete',
    cell: (props) => (
      <Button colorScheme="red" variant="solid" size="sm" >
        Delete
      </Button>
    ),
  },
];

function ExamTable({ isAdminTable }){
  const [data, setData] = useState(exams)

  const columns = isAdminTable ? [...mainColumns, ...adminColumns] : mainColumns;

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    
    <Box>
      <Box className="table" w={table.getTotalSize()}>
          {table.getHeaderGroups().map( (headerGroup) => (
            //table row
            <Box className="tr" w key={headerGroup.id}>
              {headerGroup.headers.map( (header) => (
                <Box className="th" w={header.getSize()} key={header.id}>
                  {header.column.columnDef.header}
                </Box>
              ))}
            </Box>
          ))}
          {
            table.getRowModel().rows.map( (row) => <Box className="tr" key={row.id}>
              {row.getVisibleCells().map( (cell) => <Box className="td" w={cell.column.getSize()} key={cell.id}> 
                {/* render react components */}
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