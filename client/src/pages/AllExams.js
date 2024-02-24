import React from "react"
import ExamTable from '../components/ExamTable'
import Search from '../components/Search'

const AllExams = () => {

    return ( 
        <div>
            <ExamTable isAdminTable={false}/>
        </div>
     );
}
 
export default AllExams;