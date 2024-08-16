import React from 'react'
import LeftPanel from './Layout/LeftPanel'
import RightPanel from './Layout/RightPanel';
const App = () => {
  return (
    <div className=' dark:text-white dark:bg-black h-screen   lg:flex overflow-x-hidden '>
      <LeftPanel/>
      <RightPanel/>
  
    </div>
  )
}

export default App
