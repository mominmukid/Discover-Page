import React from 'react'
import { MdSavedSearch } from "react-icons/md";
import { FaAudible } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { MdOutlineSportsVolleyball } from "react-icons/md";

function Footer() {
  return (
    <div className='w-full h-[3rem] flex justify-around items-center text-2xl'>
         <div className='flex flex-col justify-center items-center'><p ><MdSavedSearch/></p> <p className='font-semibold text-[0.9rem]'>Home</p></div>
         <div className='flex flex-col justify-center items-center'><p ><MdOutlineSportsVolleyball/></p> <p className='font-semibold text-[0.9rem]'>Discover</p></div>
         <div className='flex flex-col justify-center items-center'><p ><FaAudible/></p> <p className='font-semibold text-[0.9rem]'>Library</p></div>
         <div className='flex flex-col justify-center items-center'><p ><PiSignInBold/></p> <p className='font-semibold text-[0.9rem]'>Sign In</p></div>

    </div>
  )
}

export default Footer