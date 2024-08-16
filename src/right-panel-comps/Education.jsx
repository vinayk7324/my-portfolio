import React from 'react'
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <div id='education' className='p-2 rounded-xl dark:bg-gray-900 p-4'>
    <h1 className=' text-lg font-bold flex items-center space-x-2'> <FaUserGraduate /> <span>Educational Background</span>  </h1>
    <div className=" flex justify-between">
        <div className="  p-2  "> 
            <h2 className='text-sm dark:text-yellow-500'> Indian Institute of Technology Roorkee,Uttarakhand </h2>
            <div className=" flex flex-col text-[12px]">
                <span> B.tech(Chemical Engineering) </span>
                <span> Batch:2022-26 </span>
                <span> UG(III Year I Semester) </span>
                <span>CGPA:6.112/10.000</span>
            </div>
        </div>
        <div className=" p-2">
            <h2 className='text-sm dark:text-yellow-500'> RNAR College Samastipur,Bihar</h2>
            <div className=" flex-col flex text-[12px]">
                <span>
                    INTERMEDIATE(MATHEMATICS)
                </span>
                <span> Batch:2018-20</span>
                <span> MARKS:89% </span>
            </div>
        </div>
    </div>

        
        
      
    </div>
  )
}

export default Education
