import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateExam() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        patientId: '',
        patientAge: '',
        patientSex: '',
        patientBMI: '',
        patientZipCode: '',
        examId: '',
        imageURL: '',
        examDate: '',
        keyFindings: '',
        brixiaScore: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/exams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                navigate('/admin'); // Navigate to admin page after exam is added
            } else {
                console.error('Failed to add exam:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding exam:', error);
        }
    };

    const handleClick = () => {
        navigate('/admin');
    }

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <button className="btn btn-primary mx-1" type="submit">Add Exam</button>
                <button className="btn btn-secondary mx-1" type="button">Random Exam</button>
                <button className="btn btn-danger mx-1" type="button" onClick={handleClick}>Cancel</button>
            </div>
            <h1 className="text-center mb-4">Create Exam</h1>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <h2>Patient Info</h2>
                        <div className="mb-3">
                            <label htmlFor="patientId" className="form-label">Patient ID:</label>
                            <input type="text" className="form-control" id="patientId" name="patientId" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="patientAge" className="form-label">Age:</label>
                            <input type="number" className="form-control" id="patientAge" name="patientAge" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="patientSex" className="form-label">Sex:</label>
                            <input type="text" className="form-control" id="patientSex" name="patientSex" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="patientBMI" className="form-label">BMI:</label>
                            <input type="text" className="form-control" id="patientBMI" name="patientBMI" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="patientZipCode" className="form-label">ZipCode:</label>
                            <input type="text" className="form-control" id="patientZipCode" name="patientZipCode" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h2>Exam Info</h2>
                        <div className="mb-3">
                            <label htmlFor="examId" className="form-label">Exam ID:</label>
                            <input type="text" className="form-control" id="examId" name="examId" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageURL" className="form-label">Image URL:</label>
                            <input type="text" className="form-control" id="imageURL" name="imageURL" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="examDate" className="form-label">Date:</label>
                            <input type="date" className="form-control" id="examDate" name="examDate" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="keyFindings" className="form-label">KeyFindings:</label>
                            <textarea className="form-control" id="keyFindings" rows="3" name="keyFindings" onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="brixiaScore" className="form-label">Brixia Score:</label>
                            <input type="text" className="form-control" id="brixiaScore" name="brixiaScore" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
