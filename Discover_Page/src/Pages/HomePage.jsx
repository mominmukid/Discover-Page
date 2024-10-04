import React from 'react'
import { NavBar, SideBar, MainArea } from '../components'


function HomePage() {
  return (
    <div className='w-full relative  text-white h-auto  bg-black'>
      <SideBar/>
      <MainArea/>
    </div>
  )
}

export default HomePage