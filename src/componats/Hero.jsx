import React from 'react'
import Blur from './Blur'
import AOS from 'aos'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import hero from '../img/hero.png'
import '../App.css'
function Hero() {
  AOS.init()
  return (
    <>
      <section data-aos='fade-up' data-aos-anchor-placement="top-center" className='relative h-screen w-full flex justify-center items-start  flex-wrap gap-5 ' >
        <div className='h-screen w-full  flex justify-center items-center md:gap-5 flex-wrap-reverse backdrop-blur-3xl bg-slate-100 bg-opacity-20'>

          <div className='flex flex-col gap-5 justify-center md:items-start items-center m-2 md:w-5/12'>
            <h1 className='text-5xl md:text-6xl font-bold text-center md:text-start -mt-10 glowing '>Web Developer</h1>
            <p className='text-md opacity-80 w-4/5 text-center md:text-start'>
              I Am frontend developer with high level of skills in web designing and development , producing the quality work
            </p>
            <button className='border-[1px] border-black p-3 rounded-3xl  '>
              Hire Me
            </button>
            <div className='flex justify-center items-center gap-5 mt-3 relative'>
              <FiFacebook className='border-[1px]  border-black w-14 py-3 px-3 h-14 rounded-full hover:scale-110 transition duration-300' />
              <FiInstagram className='border-[1px] border-black w-14 py-3 px-3 h-14 rounded-full hover:scale-110 transition duration-300' />
              <FiLinkedin className='border-[1px] border-black w-14 py-3 px-3 h-14 rounded-full hover:scale-110 transition duration-300' />
            </div>
          </div>
          <div className='flex justify-center items-center  md:w-5/12'>
            <img src={hero} alt="" className='md:w-4/5 z-50' />
            <div className='absolute bg-slate-100 -translate-y-20 -translate-x-28 py-2 px-4 backdrop-blur-3xl bg-opacity-30 rounded-md '>web developer</div>
            <div className='absolute  bg-slate-100 translate-y-32 translate-x-32 py-2 px-5 bg-opacity-30 rounded-md'>Programmer</div>
          </div>
        </div>
      </section>
      <Blur val='items-center' />

    </>
  )
}

export default Hero