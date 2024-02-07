import './App.css';

import { useApi } from './hooks/use-api';

// returns the table containing exam data
function ExamTable(){
  const exams = [
    { patientID: 1, examID: 1, keyFindings: 'A note.', brixiaScores: 1, age:1, sex:1, bmi:1, zip:1},
    { patientID: 2, examID: 2, keyFindings: 'A note.', brixiaScores: 2, age:2, sex:1, bmi:1, zip:1},
  ]

  return (
    <table className='examTable'>
      {exams.map(exam =>
        //table row
        <tr key={exam.id}>
          {/* data cells */}
          <td>{exam.patientID}</td> 
          <td>{exam.examID}</td>
          <td>{exam.keyFindings}</td>
          <td>{exam.brixiaScores}</td>
          <td>{exam.age}</td>
          <td>{exam.sex}</td>
          <td>{exam.bmi}</td>
          <td>{exam.zip}</td>
        </tr>
      )}
    </table>
  )
}

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
          <ExamTable></ExamTable>
        </p>
      </header>
    </div>
  );
}

export default App;
