

import React, { useEffect, useState } from 'react';
import Discover from '../../../public/svg/DiscoverSvg.svg';
import NavBar from './NavBar';
import AllCard from './AllCard';
import { Outlet } from 'react-router';
import { useParams } from 'react-router';

function MainArea() {
   const params=useParams();
   const [isVisible,setIsVisibal]=useState(true)

   useEffect(()=>{
      if(params.length>1){
         setIsVisibal(false)
         console.log(params.length);
         
      }
   })
   return (
      <div className='w-[100%]  md:w-[83%] bg-[#191a1a] md:rounded-lg mt-0 md:mt-2 border-[1px] border-[#2a2c2d]'>
         {/* Top Bar */}
         <div className='w-full flex flex-col justify-start items-center'>
            <div className='w-full px-7 py-5 border-b-[1px]  border-[#2a2c2d] flex justify-between items-center md:rounded-t-lg'>
               <div className='w-full flex justify-between items-center'>
                  <p className='flex text-gray-100  items-center gap-2'>
                     <img src={Discover} alt="logo" />
                     <span className='text-xl font-bold'>Discover</span>
                  </p>
                  <p className='text-xl font-bold md:hidden'>hammer</p>
               </div>
            </div>

            {/* Main Content */}
            <div className={`${isVisible ? 'block':'hidden'} w-full flex flex-col justify-start items-center bg-[#191a1a]`}>
               {/* Sticky NavBar */}
               <div className=' w-[100%] md:w-[80%] sticky top-0 z-50 bg-[#202222]'>
                  <NavBar />
               </div>

               {/* Content Area */}
               <div className=' w-[100%] md:w-[80%] flex flex-col gap-2 justify-center items-start '>
                  <Outlet />
               </div>


            </div>
         </div>

      </div>
   );
}

export default MainArea;
