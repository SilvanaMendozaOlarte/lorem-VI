import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Exam</h1>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2>Patient Info</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="patientId" className="form-label">Patient ID:</label>
              <input type="text" className="form-control" id="patientId" />
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <h2>Exam Info</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="examId" className="form-label">Exam ID:</label>
              <input type="text" className="form-control" id="examId" />
            </div>

            <div className="mb-3">
              <label htmlFor="imageURL" className="form-label">Image URL:</label>
              <input type="text" className="form-control" id="imageURL" />
              <img src="https://picsum.photos/200/200" alt="Random" className="img-fluid mt-2" />
            </div>
       
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary mx-1" type="submit">Add Exam</button>
        <button className="btn btn-primary mx-1" type="button">Random Exam</button>
        <button className="btn btn-danger mx-1" type="button">Cancel</button>
      </div>
    </div>
  );
}
