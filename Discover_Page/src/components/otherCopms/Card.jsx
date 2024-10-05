import React, { useEffect } from 'react'
import { fetchNews } from '../../api/AllCardData'
import { FaUser } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import Loader from './Loader';
import { useNavigate } from 'react-router';

function Card({
   data,
   news,
   className,
   imageHeight,
}) {
   const navigate = useNavigate();
   

   const handelOnclick = () => {
     
      navigate(`/news/${news}/${data.title}`)
   }

   return (
      <>
         <div className='Card w-full h-full  flex flex-wrap justify-center items-center'>
            <div
               onClick={handelOnclick}
               className={`  rounded-lg  flex flex-col justify-between cursor-pointer items-center h-[10%]    mt-2  shadow-md shadow-gray-400/20 bg-[#202222] ${className}`}>

               <div className={`w-full ${imageHeight} `} >
                  <img src={data.urlToImage} className='w-full h-full object-cover' alt={<Loader />} />
               </div>
               <div className='w-full flex flex-col   justify-start p-3'>
                  <h1 className='text-lg text-[#e8e8e6] font-bold'>{data.title}</h1>
                  <p className='text-normal text-[#909191]'>{data.description}</p>
               </div>
               <div className='  p-3 w-full flex justify-between item-center text-gray-600'>
                  <p className='cursor-pointer'><FaUser /></p>
                  <p className='cursor-pointer'><CiBookmark /></p>
               </div>
            </div>
         </div>

      </>
   )
}

export default Card