import React from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import ExamTable from '../components/ExamTable'
import Search from '../components/Search.js'
//import create exam
import CreateExam from './CreateExam'


const Admin = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/exams/create');
    };
    
    return ( 
        <div>
            <div>
                <button className="btn btn-primary mx-1" type="submit" onClick={handleClick}>Create Exam</button>
                <Search />
            </div>
            <div>
                <ExamTable isAdminTable={true}/>
            </div> 
        </div>
     );
}
 
export default Admin;