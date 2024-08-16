import React from 'react'
import { FaTrophy } from "react-icons/fa";

const Achievements = () => {
  return (
    <div>
        <div className=" p-2 rounded-xl dark:bg-gray-900 p-4">
            <div className=" text-xl font-bold flex items-center space-x-2">
                <FaTrophy/>
                <span> Achievements </span>

            </div>

            <div className=" py-3 ">
               <div className=' bg-black py-2 px-1 '> Appreciation Award by HOD in 3rd Semester.</div>
            </div>
        </div>
      
    </div>
  )
}

export default Achievements
