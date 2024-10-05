

import React, { useEffect, useState } from 'react';
import Discover from '../../../public/svg/DiscoverSvg.svg';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { MdOutlineSportsVolleyball } from "react-icons/md";
import Logo from '../../../public/svg/logo.svg';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";



function MainArea() {

   return (
      <div className='w-[100%]  lg:w-[83%] bg-[#191a1a] lg:rounded-lg mt-0 lg:mt-2 border-[1px] border-[#2a2c2d]'>
         {/* Top Bar */}
         <div className='w-full flex flex-col justify-start items-center'>
            <div className={` w-full px-7 py-5 border-b-[1px]  border-[#2a2c2d] flex justify-between items-center lg:rounded-t-lg`}>
               <div className={` w-full flex justify-between items-center`}>
                  <p className=' hidden lg:block lg:flex text-gray-100  items-center gap-2'>
                     <span className='font-extralight text-2xl'><MdOutlineSportsVolleyball/></span>
                     <span className='text-2xl '>Discover</span>
                  </p>
                  <p><img src={Logo} alt="logo" className='lg:hidden w-[70%] h-[3rem] rounded-full' /></p>
                  <p className='lg:hidden rounded-full text-white cursor-pointer bg-gray-400/10 p-2 text-lg'><HiOutlineAdjustmentsHorizontal /></p>
               </div>
            </div>

            {/* Main Content */}
            <div className={`w-full flex flex-col justify-start items-center bg-[#191a1a]`}>
               {/* Sticky NavBar */}
               <div className={`  w-[100%] lg:w-[80%] sticky top-0 z-50 bg-[#202222]`}>
                  <NavBar />
               </div>

               {/* Content Area */}
               <div className=' w-[100%] lg:w-[80%] flex flex-col gap-2 justify-center items-start '>
                  <Outlet />
               </div>


            </div>
         </div>

      </div>
   );
}

export default MainArea;
