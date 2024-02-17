import React from "react";
//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <>
      <h1>Create Exam</h1>
      <button class="btn btn-primary" type="submit">
        Add Exam
      </button>
      <button class="btn btn-primary" type="submit">
        Random Exam
      </button>
      <button type="button" class="btn btn-danger">
        Cancel
      </button>
    </>
  );
}
