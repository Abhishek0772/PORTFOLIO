import React from 'react'
import Blur from './Blur'
import AOS from 'aos'
import hero  from '../img/hero.png' 
function Hero() {
  AOS.init()
  return (
    <>
    <section data-aos='fade-up' data-aos-anchor-placement="top-center" className='relative h-screen w-full flex justify-center items-start  flex-wrap gap-5 ' >
      <div className='h-full w-full  flex justify-center items-center gap-5 flex-wrap'>

<div className='rounded-md flex flex-col gap-5 justify-center  md:w-2/3 h-2/3 md:h-1/2 md:items-start items-center px-3 backdrop-blur-2xl bg-slate-200 bg-opacity-0 m-2 '>
  <h1 className='text-6xl font-bold text-center -mt-10 '>Web Developer</h1>
  <p className='text-md opacity-80 w-4/5 '>
  I Am frontend developer with high level of skills in web designing and development , producing the quality work
  </p>
  <button className='border-[1px] border-black p-3 rounded-b-md'>
    Hire Me
  </button>
</div>
<div className='flex justify-center items-center bg-slate-200 bg-opacity-20 backdrop-blur-2xl rounded-lg h-2/3 md:h-1/2 '>
<img src={hero} alt="" />
</div>
      </div>
    </section>
    <Blur val='items-center'/>
    
    </>
  )
}

export default Hero