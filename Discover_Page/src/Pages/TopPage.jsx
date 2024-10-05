import React, { useEffect } from 'react'
import AllCard from '../components/bodyComp/AllCard'
function TopPage() {

   return (
      <div className=' w-[100%] h-full  md:w-full flex flex-col gap-2 justify-center items-start'>
         
         <AllCard news={'top'} />
      </div>
   )
}

export default TopPage