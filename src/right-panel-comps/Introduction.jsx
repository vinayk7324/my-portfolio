import React from 'react'
import image2 from "../assets/img2.png"
import { SparklesPreview } from '../components/SparklesPreview'
import { Button } from './../components/UI/Movingborder';
import { FaArrowTrendUp } from "react-icons/fa6";


const Introduction = () => {
  return (
  <div id='introduction' className="  ">
      <div  className='  rounded-xl dark:bg-gray-900'>
       <div className="  grid grid-cols-2 ">
       <div className="  flex flex-col text-center justify-center font-bold   ">
        
           <SparklesPreview >
            <span className=' text-[12px] first-letter:text-2xl '>Hi,Myself <span className='text-sm font-semibold text-yellow-500'> Vinay Kumar.</span></span>
            <span> I'm a  </span>
           <h1 className=" text-3xl lg:text-2xl font-bold text-center text-white relative z-20">
        Software Developer.
            </h1>
           </SparklesPreview>
           <div className=" space-x-3">
           <Button containerClassName={" w-48 h-12 "} className={" text-[12px] space-x-2 dark:bg-black text-yellow-500  "}>
           <span>  My Work </span> <FaArrowTrendUp className='  text-[12px] dark:text-yellow-500' />
           </Button>
           <Button containerClassName={" w-44 h-12 "} className={"  text-[12px] space-x-2 dark:bg-black text-yellow-500  "}>
           <span>  Hire Me </span> <FaArrowTrendUp className='  text-[12px] dark:text-yellow-500' />
           </Button>
           
           </div>
           
          
       </div>
       <div className="   p-1  overflow-hidden">
            <img src={image2}  className=' black-in-white/ w-full   ' alt="" />
        </div>
        
      
       </div>
      
    </div>
  </div>
  )
}

export default Introduction
