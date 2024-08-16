import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const RightNavbar = () => {
  const navArr = [
    {
    id:1,
    slug:"#introduction",
    title:"Introduction"
    },
    {
    id:2,
    slug:"#education",
    title:"Education"
    },
    {
    id:3,
    slug:"#interest",
    title:"Interests"
    },
    {
    id:4,
    slug:"",
    title:"Achievements"
    },
    {
    id:5,
    slug:"",
    title:"Work Experience"
    },
    {
    id:6,
    slug:"",
    title:"Skills"
    },
    {
    id:7,
    slug:"",
    title:"Projects"
    },
]
  return (
    <div className=' '>
    <ul className=' flex space-x-2'>

      {
        navArr.map((ele,index)=>(
          <a key={index} className=' border px-4 py-2 text-yellow-500 ' href={ele.slug}>
            {ele.title}

          </a>
        ))
      }
    </ul>
        
      
    </div>
  )
}

export default RightNavbar
