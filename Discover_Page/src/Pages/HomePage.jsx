import React from 'react'
import {  SideBar, MainArea } from '../components'


function HomePage() {
  return (
    <div className='w-full flex justify-start items-start  bg-[#202222]'>
      <SideBar/>
      <MainArea/>
    </div>
  )
}

export default HomePage