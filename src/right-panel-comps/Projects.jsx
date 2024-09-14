import React from 'react'
import { FaFolder } from "react-icons/fa";
import { AnimatedPin } from '../components/AnimatedPin';
import chatApp from '../assets/chat-app.png'
import { Button } from '../components/UI/Movingborder';
import { IoCodeSlashOutline } from "react-icons/io5";
import twClone from '../assets/twitterClone.png'

const Projects = () => {
  return (
    <div className=" p-2 rounded-xl dark:bg-gray-900 p-4">
    <div className=" text-sm font-bold flex items-center space-x-2">
        <FaFolder/>
        <span className=' '>Projects </span>

    </div>

    <div className=" py-3 ">
        <div className=" grid grid-cols-2">
            <AnimatedPin pinHref={"https://google.com"} pinTitle={"chat-app.com"}>
            <div className="flex basis-full flex-col  p-2 space-y-3    tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-[16px] text-slate-100">
            Real Time Chat Application
          </h3>
          <div className="text-[12px] !m-0 !p-0 font-normal ">
            <span className="">
              User Friendly & Fully Responsive website made with React.js Node.js Express.js MongoDB.

            </span>
          </div>
          <div className="" >
            <img src={chatApp} alt="" />
          </div>
         <div className=" pt-2 flex justify-between">
         <a className="  " href='https://chatgpt.com/c/82d68930-60d4-4cbf-a2ac-8823274386ba'> 
          <Button containerClassName={" h-10 w-32"} className={" bg-black text-yellow-500 text-sm space-x-2" }>
          <span>  Code </span>
          <IoCodeSlashOutline />

          </Button>
           </a>
         <a className="  " href='https://chatgpt.com/c/82d68930-60d4-4cbf-a2ac-8823274386ba'> 
          <Button containerClassName={" h-10 w-32 "} className={" bg-black  text-yellow-500 text-sm space-x-2" }>
            Demo
          </Button>
           </a>
         </div>

        </div>
            </AnimatedPin>
            <AnimatedPin pinHref={"https://google.com"} pinTitle={"chat-app.com"}>
            <div className="flex basis-full flex-col  space-y-3 p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-[16px] text-slate-100">
           Twitter Clone
          </h3>
          <div className="text-[14px] !m-0 !p-0 font-normal ">
            <span className="">
              User Friendly & Fully Responsive website made with React.js Node.js Express.js MongoDB.
              I am still <span className='  text-white bg-red-500 px-2 '> working</span>

            </span>
          </div>
          <div className="" >
            <img src={twClone} alt="" />
          </div>
         <div className=" pt-2 flex justify-between">
         <a className="  " href='https://chatgpt.com/c/82d68930-60d4-4cbf-a2ac-8823274386ba'> 
          <Button containerClassName={" h-10 w-32"} className={" bg-black text-yellow-500 text-sm space-x-2" }>
          <span>  Code </span>
          <IoCodeSlashOutline />

          </Button>
           </a>
         <a className="  " href='https://chatgpt.com/c/82d68930-60d4-4cbf-a2ac-8823274386ba'> 
          <Button containerClassName={" h-10 w-32 "} className={" bg-black  text-yellow-500 text-sm space-x-2" }>
            Demo
          </Button>
           </a>
         </div>

        </div>
            </AnimatedPin>
            
        </div>
       
    </div>
</div>
  )
}

export default Projects
