import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const YourComponent = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./routes/data.csv');
        const reader = response.body.getReader();
        const result = await reader.read();
        const text = new TextDecoder('utf-8').decode(result.value);
        
        // Use PapaParse to parse CSV
        Papa.parse(text, {
          header: true,  // If your CSV file has headers
          dynamicTyping: true,  // Convert numeric values to numbers
          complete: (result) => {
            setCsvData(result.data);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error.message);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV file:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  // Render your component using the fetched CSV data
  return (
    <div>
      <h1>CSV Data:</h1>
      <ul>
        {csvData.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
