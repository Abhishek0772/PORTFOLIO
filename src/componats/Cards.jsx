import React from 'react'
import Bike from '../img/bike.jpg'
function Cards() {
  return (
    <>
    <div className='w-[250px] h-[380px] flex  flex-col items-center gap-3 backdrop-blur-3xl bg-slate-200 bg-opacity-20 rounded-md pb-3'>
     <div className='w-full h-3/5'>
      <img className='w-full h-full rounded-t-md' src={Bike} alt="" />
     </div>

      <h3>
        BIKE
      </h3>
      <p className='text-center'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae.
      </p>
      <button className='px-2 py-1 rounded-b-md border-[0.8px] border-black backdrop-blur-3xl'>SEE</button>
     </div>
     
    </>

   
  )
}

export default Cards