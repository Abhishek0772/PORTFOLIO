import React from 'react'
import Blur from './Blur'

function Hero() {
  return (
    <>
    <section className='relative h-screen w-full flex justify-center items-start my-4 flex-wrap gap-5'>
        <div className=' bg-slate-300 bg-opacity-20 p-5 rounded-md'>
          <span className='text-blue-500'>hey I`am</span>
          <h1 className='font-bold my-2 text-5xl'>ABHISHEK SATPUTE</h1>
       <p>
    I Am frontend developer with high level of skills in web designing and development , producing the quality work
        </p> 
        </div>
        <div className=''>
    
        </div>
      <Blur/>
    </section>
    
    </>
  )
}

export default Hero