import React from "react"
import ExamTable from '../components/ExamTable'
import Search from '../components/Search'

const AllExams = () => {

    return ( 
        <div>
            <Search />
            <ExamTable isAdminTable={false}/>
        </div>
     );
}
 
export default AllExams;