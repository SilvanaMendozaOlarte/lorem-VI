// returns the table containing exam data
import { useState, useMemo } from "react";
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Button } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom'
import mData from '../MOCK_DATA.json'

const mainColumns = [
  {
    accessorKey: 'patient_id',
    header: 'Patient ID',
    cell: (props) => <NavLink to="/patient/:id">{props.getValue()}</NavLink>
  },
  {      
    accessorKey: 'exam_id',
    header: 'Exam ID',
    cell: (props) => <NavLink to="/exam/:id">{props.getValue()}</NavLink>
  },
  {      
    accessorKey: 'image',
    header: 'Image',
    cell: (props) => {
      return <img src={`${props.row.original.image}`} alt="exam" style= {{ maxWidth: '100px' }}  />;}

  },
  {      
    accessorKey: 'key_findings',
    header: 'Key Findings',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {      
    accessorKey: 'brixia_scores',
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
    accessorKey: 'zip_code',
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
  // const [data, setData] = useState(exams);
  const columns = isAdminTable ? [...mainColumns, ...adminColumns] : mainColumns;

  const data = useMemo(() => mData, [])

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div overflowX="auto">
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
  );
}

 

export default ExamTable;
