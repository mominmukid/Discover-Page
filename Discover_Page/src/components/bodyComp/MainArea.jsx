// import React from 'react'
// import Discover from '../../../public/svg/DiscoverSvg.svg'
// import NavBar from './NavBar'
// import AllCard from './AllCard'

// function MainArea() {
//    return (
//       <div className='w-[100%] md:w-[83%] md:mt-2  absolute top-0 left-0 bg-yellow-500 border border-gray-500 md:rounded-t-lg overflow-hidden rounded-none md:border-none md:shadow-none md:left-[16.5%] '>

//          <div className='w-[100%]  min-h-screen relative  flex flex-col justify-start items-center '>
//             <div className='w-[100%] px-7 py-5 border-b-2 border-gray-700 bg-red-500 flex justify-between items-center overflow-hidden'>
//                {/* this is the top bar */}
//                <div className='w-[90%] flex  justify-between items-center'>
//                   <p className='flex items-center gap-2'> <img src={Discover} alt="logo" /><span className='text-xl font-bold'>Discover</span></p>
//                   <p className='text-xl font-bold md:hidden'>hammer</p>
//                </div>
//             </div>



//             <div className='w-[90%] md:w-[70%] sticky top-0  min-h-screen bg-blue-500'>
//                {/* this is the nav bar we call another component here */}

//                <div className='w-[100%] sticky top-0 z-10'>
//                   <NavBar />
//                </div>
//                {/* this is the another contain to use the show all cards data  we are call another component here */}
//                <AllCard />
//             </div>



//          </div>

//       </div>
//    )
// }

// export default MainArea

import React from 'react';
import Discover from '../../../public/svg/DiscoverSvg.svg';
import NavBar from './NavBar';
import AllCard from './AllCard';

function MainArea() {
   return (
      <div className='min-h-screen absolute top-0 left-0 md:left-[16.5%] w-[100%] md:w-[83.5%] bg-yellow-500  rounded-lg mt-2 '>
         {/* Top Bar */}
         <div className='w-full flex flex-col justify-start items-center'>
            <div className='w-full px-7 py-5 border-b-2 border-gray-700 bg-red-500 flex justify-between items-center rounded-t-lg'>
               <div className='w-full flex justify-between items-center'>
                  <p className='flex items-center gap-2'>
                     <img src={Discover} alt="logo" />
                     <span className='text-xl font-bold'>Discover</span>
                  </p>
                  <p className='text-xl font-bold md:hidden'>hammer</p>
               </div>
            </div>

            {/* Main Content */}
            <div className='w-full flex flex-col justify-start items-center bg-blue-500'>
               {/* Sticky NavBar */}
               <div className=' w-[100%] md:w-[70%] sticky top-0 z-50 bg-white'>
                  <NavBar />
               </div>

               {/* Content Area */}
               <div className=' w-[100%] md:w-[70%] sticky top-0  bg-white'>
               <AllCard />
               </div>
               

            </div>
         </div>

      </div>
   );
}

export default MainArea;
