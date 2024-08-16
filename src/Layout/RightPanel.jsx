import React from 'react'
import RightNavbar from '../custom-components/RightNavbar'
import { Boxes } from '../components/UI/Backgroundboxes'
import Introduction from '../right-panel-comps/Introduction'
import Education from '../right-panel-comps/Education'
import Interest from '../right-panel-comps/Interest'
import Achievements from '../right-panel-comps/Achievements'
import Projects from '../right-panel-comps/Projects'

const RightPanel = () => {
  return (
    <div className=' overflow-hidden px-6 py-4 space-y-4 dark:bg-grid-white/[0.2] overflow-x-hidden lg:w-[70%]'>
    
      <RightNavbar/>
      <div className=" scroll h-[90vh] space-y-4 overflow-x-hidden">
      <Introduction/>
      <Education/>
      <Interest/>
      <Achievements/>
      <Projects/>
      </div>
    </div>
  )
}

export default RightPanel
