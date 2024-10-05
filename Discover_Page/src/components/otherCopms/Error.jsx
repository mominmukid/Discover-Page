import React from 'react'

function Error({
   error,
}) {
   const currerror=error;
  return (
    <div className='w-[50%] flex flex-col justify-center items-center h-[20rem] bg-red-500'>
      <p>{currerror.status}</p>
      <p>Error Image</p>
      <p>{currerror.message}</p>

    </div>
  )
}

export default Error