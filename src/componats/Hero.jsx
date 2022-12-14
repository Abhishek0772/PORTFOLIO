import React from 'react'
import Blur from './Blur'
import AOS from 'aos'
import hero  from '../img/hero.png' 
import '../App.css'
function Hero() {
  AOS.init()
  return (
    <>
    <section data-aos='fade-up' data-aos-anchor-placement="top-center" className='relative h-screen w-full flex justify-center items-start  flex-wrap gap-5 ' >
      <div className='h-full w-full  flex justify-center items-center gap-5 flex-wrap-reverse my-2 backdrop-blur-3xl '>

<div className='rounded-md flex flex-col gap-5 justify-center md:items-start items-center px-3  bg-slate-200 bg-opacity-0 m-2 md:w-5/12'>
  <h1 className='text-5xl font-bold text-center md:text-start -mt-10 glowing '>Web Developer</h1>
  <p className='text-md opacity-80 w-4/5 text-center md:text-start'>
  I Am frontend developer with high level of skills in web designing and development , producing the quality work
  </p>
  <button className='border-[1px] border-black p-3 rounded-b-md '>
    Hire Me
  </button>
</div>
<div className='flex justify-center items-center  md:w-5/12'>
<img src={hero} alt="" className='md:w-4/5 z-50' />
</div>
      </div>
    </section>
    <Blur val='items-center'/>
    
    </>
  )
}

export default Hero