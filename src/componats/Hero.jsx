import React from 'react'
import Blur from './Blur'

function Hero() {
  return (
    <>
    <section className='relative h-screen w-full flex justify-center items-start mt-14 flex-wrap gap-5' >
<div className='shadow-md shadow-gray-300 relative bg-slate-200 bg-opacity-20 h-4/5 flex flex-col gap-5 justify-center w-11/12 items-center'>
  <h1 className='text-5xl font-bold text-center -mt-10 '>Web Developer</h1>
  <p className='text-md opacity-80 w-4/5 text-center'>
  I Am frontend developer with high level of skills in web designing and development , producing the quality work
  </p>
  <button className='border-2 border-black p-3 rounded-b-md'>
    Hire Me
  </button>
</div>
<Blur val='items-center'/>
    </section>
    
    </>
  )
}

export default Hero