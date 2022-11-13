import React from 'react'
import Blur from './Blur'

function Hero() {
  return (
    <>
    <section className='relative h-screen w-full flex justify-center items-start mt-12  flex-wrap ' >
      <div className='h-2/3 w-2/3 rounded-lg backdrop-blur-2xl flex justify-center items-center  flex-wrap gap-5'>

<div className=' h-4/5 flex flex-col justify-center w-11/12 items-center '>
  <h1 className='text-6xl font-bold text-center '>Web <span className='text-3xl md:text-6xl sm:text-6xl'>Developer</span></h1>
  <p className='text-md opacity-80 w-4/5 text-center'>
  I Am frontend developer with high level of skills in web designing and development , producing the quality work
  </p>
  <button className='border-[1px] border-black p-3 rounded-b-md'>
    Hire Me
  </button>
</div>
      </div>
    </section>
<Blur val='items-center'/>
    
    </>
  )
}

export default Hero