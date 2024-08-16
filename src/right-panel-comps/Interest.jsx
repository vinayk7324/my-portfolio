import React from 'react'
import { FaGamepad } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BackgroundGradient } from '../components/UI/Backgroundgradient';
import { FaChartLine } from "react-icons/fa6";
import { TiVendorAndroid } from "react-icons/ti";


const Interest = () => {
    const interestArr = [
        {
            title: "Full Stack Developement",
            experience: "2",
            icon: CgWebsite
        },
        {
            title: "Android Developement",
            experience: "1",
            icon: TiVendorAndroid
        },
        {
            title: "Data scientist",
            experience: "0",
            icon: FaChartLine
        },
    ]
    return (
        <div id='interest' className=' p-2 rounded-xl dark:bg-gray-900 p-4'>
            <div className="">
                <h1 className=' flex items-center text-xl font-bold space-x-2 '><FaGamepad className=' text-2xl' /> <span> Area of interest </span>  </h1>
            </div>
            <div className=" grid grid-cols-3 gap-2 p-4">
                {
                    interestArr.map((ele, index) => (
                        <BackgroundGradient key={index}>
                             
                            <div className="   bg-black rounded-2xl space-y-4 flex items-center justify-center flex-col p-2 py-4">
                                <div className=" border-[4px] w-fit p-2 rounded-full  ">
                                    <ele.icon className=' text-3xl' />


                                </div>
                                <div className=" text-xl font-bold text-yellow-500">{ele.title} </div>
                                <div className="  "> Developing Experience: {ele.experience} Years </div>
                            </div>
                      
                        </BackgroundGradient>
                    ))
                }
            </div>

        </div>
    )
}

export default Interest
