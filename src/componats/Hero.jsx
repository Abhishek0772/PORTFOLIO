import React from 'react'
import Blur from './Blur'
import AOS from 'aos'
function Hero() {
  AOS.init()
  return (
    <>
    <section data-aos='fade-up' data-aos-anchor-placement="top-center" className='relative h-screen w-full flex justify-center items-start  flex-wrap gap-5 ' >
      <div className='h-full w-full  flex justify-center items-center'>

<div className='rounded-md flex flex-col gap-5 justify-center w-3/4 md:w-2/3 h-2/3 md:h-1/2 items-center backdrop-blur-xl bg-slate-200 bg-opacity-0'>
  <h1 className='text-6xl font-bold text-center -mt-10 '>Web Developer</h1>
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