import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { Toaster } from 'react-hot-toast';
function MainContainer() {
  return (
    <>
    <div className="main-container">
      <Toaster/>
    <LeftSide/>
    <RightSide/>
    </div>
    
    </>
  )
}

export default MainContainer