import React from 'react'
import Cols from './Cols'

const StudentInfoCard = ({ heading, data }) => {
    return (
        <div className="student-data block w-auto h-auto mt-3 p-2">
            <h3 className='text-xl text-orange-600 font-bold'>{heading} </h3>
            {/* <Cols title={"Full Name"} desc={"Muhammad Hasnain"} />
            <Cols title={"Full Name"} desc={"Muhammad Hasnain"} />
            <Cols title={"Full Name"} desc={"Muhammad Hasnain"} />
            <Cols title={"Full Name"} desc={"Muhammad Hasnain"} />
            <Cols title={"Full Name"} desc={"Muhammad Hasnain"} /> */}
            {data.map((col,index)=>{
                return <Cols title={col.title} key={index} desc={col.desc} />
            })}
        </div>

    )
}

export default StudentInfoCard