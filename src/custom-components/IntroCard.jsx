import React from 'react'
import Profile from '../assets/Profile.jpeg'
import Github from '../svg/Github'
import LinkedIn from '../svg/LinkedIn'
import { MdOutlineFileDownload } from "react-icons/md"
import { Button } from '../components/UI/Movingborder'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const IntroCard = () => {
  return (
    <div className=' dark:bg-black  backdrop-blur-sm   h-full rounded-2xl border-[1px] dark:border-[#1d1d1d]'>
      <div className=" flex space-y-5 h-full  py-6 flex-col items-center ">
      <div className=" h-28 border-[6px] dark:border-white border-black w-28  overflow-hidden rounded-full flex items-center justify-center ">
            <img src={Profile} className=' h-full ' alt="" />
        </div>
        <div className=" text-[23px] font-bold text-center   ">
            Vinay Kumar
            <div className=' dark:text-neutral-300 font-normal text-[16px]'> @22112115</div>
        </div>
        <span className='flex flex-col text-center space-y-2 '>
            <span className=' font-bold text-yellow-500 '> Indian Institute of Technology,Roorkee</span>
          <span className=' text-[16px]'>  BTech(Chemical Engineering)</span>
            <span className=' text-[16px]'>UG (III Year I Semester)</span>
            <span className=' text-[16px]'>CGPA: 6.112/10.000</span>
        </span>
        <span className="socialLink text-center  ">
            <span className='  w-full font-bold  text-yellow-500'> Social Link </span>
            <span className=' flex space-x-4 p-2 items-center justify-center'>
                <a href={"https://github.com/vinayk7324?tab=repositories"}>
                <Github/>
                </a>
                <a href={"https://www.linkedin.com/in/vinay-kumar-a7b284279/"}>
                    <LinkedIn/>
                </a>
                <a href="">
                <FaInstagram  className=' text-2xl'/>
                </a>
                <a href="">
                <MdOutlineEmail className='text-2xl' />
                </a>
    
            </span>
        </span>

        <div className="">
            <Button containerClassName={"h-12 w-60  "} className=' space-x-2 bg-black text-[18px] flex items-center space-x-2 border px-4 py-2 twitter-text rounded-lg font-bold'>
                <span className=' text-yellow-500'>Download Resume</span>
                 <span className=' dark:text-yellow-500 text-[26px] font-bold text-black '> <MdOutlineFileDownload  /></span>
            </Button>
        </div>
      </div>
      
         
      
    </div>
  )
}

export default IntroCard
