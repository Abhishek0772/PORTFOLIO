import React from 'react'
import Blur from './Blur'
import AOS from 'aos'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { BsCodeSlash } from 'react-icons/bs'
import { VscVmConnect } from 'react-icons/vsc'
import { AiOutlineGithub } from 'react-icons/ai'
import hero from '../img/hero.png'
import '../App.css'
import { Link } from 'react-scroll'
function Hero() {

  return (
    <>
      <section className='relative h-screen w-full flex justify-center items-start  flex-wrap gap-5 ' >
        <div className='h-screen w-full  flex justify-center items-center md:gap-5 flex-wrap-reverse backdrop-blur-xl bg-slate-100 bg-opacity-10'>

          <div className='flex flex-col gap-5 justify-center md:items-start items-center m-2 md:w-5/12' >
            <h1 className='text-5xl md:text-6xl font-bold text-center md:text-start -mt-10 glowing image.png'>Web Developer</h1>
            <p className='text-md opacity-80 w-4/5 text-center md:text-start '>
              I Am frontend developer with high level of skills in web designing and development , producing the quality work
            </p>
            <Link to='about' duration={800} smooth={true}><button className='border-[1px] hover:scale-105 transition delay-400 border-black p-3 rounded-3xl  '>
              Hire Me
            </button></Link>
            <div className="flex justify-center items-center gap-3">
      <a href="https://www.facebook.com/abhishek.satpute.5099" target={'_blank'}><FiFacebook  className='border-[1px]  border-black w-14 py-3 px-3 h-14 rounded-full hover:scale-110 transition duration-150'  /></a>
      <a href="https://www.instagram.com/abhi__satpute07/ target={'_blank'}"><FiInstagram className='border-[1px] border-black w-14 py-3 px-3 h-14 rounded-full hover:scale-110 transition duration-150' /></a>
      <a href="https://www.linkedin.com/in/satpute-abhishek-0b61a5243" target={'_blank'}><FiLinkedin className='border-[1px] border-black w-14 py-3 px-3 h-14 rounded-full hover:scale-110 transition duration-150' /></a>
      <a href='https://github.com/Abhishek0772' target={'_blank'}><AiOutlineGithub className='border-[1px] border-black w-14 py-3 px-3 h-14 rounded-full hover:scale-110 transition duration-300' /></a>
      </div>
          </div>
          <div className='flex justify-center items-center  md:w-5/12 overflow-hidden'>
            <img src={hero} alt="" className='md:w-4/5' />
            <div className='text-white  absolute bg-gradient-to-r from-purple-600 to-pink-500 -translate-y-20 -translate-x-32 py-2 px-4 backdrop-blur-3xl bg-opacity-50 rounded-md md:-translate-y-28 md:-translate-x-36 flex justify-center items-center gap-1'><VscVmConnect className='border-[1px] rounded-full  w-6 p1 h-6 p-1 '/>Web Developer</div>

            <div className='absolute  bg-gradient-to-r from-purple-600 to-pink-500 text-white translate-y-36 translate-x-28 py-2 px-5 bg-opacity-20 rounded-md md:translate-y-44 md:translate-x-36 text-lg backdrop-blur-3xl flex justify-center items-center gap-1'><BsCodeSlash className='border-[1px] rounded-full w-6  h-6 p-1 '/>Programmer</div>
          </div>
        </div>
      </section>
      <Blur val='items-center' />

    </>
  )
}

export default Hero