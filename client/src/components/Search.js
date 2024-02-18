import React, { useState } from 'react';

//search bar
export function Search() {
  const [query, setquery] = useState("");
  const getFilteredExams = (query, exams) => {
    if (!query) {
      return exams;
    }
    return exams.filter(exams.name.includes(query));
  };
  const exams = [
    { patientID: 1, examID: 1, keyFindings: 'A note.', brixiaScores: 1, age: 1, sex: 1, bmi: 1, zip: 1 },
    { patientID: 2, examID: 2, keyFindings: 'A note.', brixiaScores: 2, age: 2, sex: 1, bmi: 1, zip: 1 },
  ];

  return (
    <div>
      <label>Search: </label>
      <input type="text" onChange={e => setquery(e.target.value)} />
    </div>
  );

}
