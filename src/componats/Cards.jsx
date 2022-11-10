import React from 'react'
import Bike from '../img/bike.jpg'
function Cards() {
  return (
    <div className='flex justify-center items-center gap-3 flex-wrap'>
      <div className='flex justify-start items-center flex-col w-80 md:w-64 h-[480px] shadow-sm shadow-gray-500 bg-slate-300 bg-opacity-40 backdrop-blur-3xl rounded-md'>
        <div className='w-full  flex justify-center items-start'>
          <img className='w-64 h-72 rounded-md' src={Bike} alt="" />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold my-2 text-xl'>BIKE</h1>
          <p className='text-center px-2 py-2 text-gray-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam?
          </p>
          <button className='backdrop-blur-3xl shadow-xl shadow-slate-400 bg-red-400 bg-opacity-40 p-1 px-4 rounded-md my-1'>See</button>
        </div>
      </div> 
     

      </div>
   
  )
}

export default Cards