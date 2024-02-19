import { useState, useEffect } from 'react';
//! insert https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams here
const API_ROOT = 'http://localhost:9000';

export function useApi({ path } = { path: '' }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}/${path}`)
      .then(res => res.text())
      .then(res => setResponse(res));
  }, []);

  return {
    response
  };
}
