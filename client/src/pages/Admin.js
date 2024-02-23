import React from "react"
import ExamTable from '../components/ExamTable'

const Admin = () => {
    return ( 
        <div>
            <div>
                <button className="btn btn-primary mx-1" type="submit">Create Exam</button>
            </div>
            <div>
                <ExamTable isAdminTable={true}/>
            </div> 
        </div>
     );
}
 
export default Admin;