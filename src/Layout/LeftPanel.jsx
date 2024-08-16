import React from 'react'
import IntroCard from '../custom-components/IntroCard'
import { Spotlight } from '../components/UI/Spotlight'
import { BackgroundGradient } from '../components/UI/Backgroundgradient'

const LeftPanel = () => {
  return (
    <div className=' lg:w-[30%] h-screen lg:ps-14 lg:pt-10 lg:pr-8  bg-grid-black/[0.6] dark:bg-grid-small-white '>
      <Spotlight fill={"blue"} className=" -top-48 right-0"/>
<BackgroundGradient className={ " h-[80vh] "}>

      <IntroCard/>
</BackgroundGradient>
        

       
      
    </div>
  )
}

export default LeftPanel
