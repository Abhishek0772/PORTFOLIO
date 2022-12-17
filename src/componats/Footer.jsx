import React from 'react'
import {FiFacebook }  from 'react-icons/fi'
import {FiInstagram}  from 'react-icons/fi'
import {FiLinkedin}  from 'react-icons/fi'
import {AiOutlineGithub}  from 'react-icons/ai'
import {Link } from 'react-scroll'
import Blur from './Blur'
function Footer() {
  return (
   <section className='absolute w-full'>
    <div className='w-full  justify-center items-center flex flex-col h-64 bg-slate-200 bg-opacity-20 backdrop-blur-2xl gap-3'>
      <div className="flex justify-center items-center gap-3">
      <a href="https://www.facebook.com/abhishek.satpute.5099" target={'_blank'}><FiFacebook  className='border-[1px]  border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150'  /></a>
      <a href="https://www.instagram.com/abhi__satpute07/ target={'_blank'}"><FiInstagram className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150' /></a>
      <a href="https://www.linkedin.com/in/satpute-abhishek-0b61a5243" target={'_blank'}><FiLinkedin className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150' /></a>
      <a href='https://github.com/Abhishek0772' target={'_blank'}><AiOutlineGithub className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-300' /></a>
      </div>
      <div className='flex gap-3 my-2 '>
        <Link to='home' duration={800} offset={-70} smooth={true} className='hover:opacity-100 opacity-80 transition duration-300' href="">Home</Link>
        <Link to='about' duration={800} offset={-70} smooth={true} className='hover:opacity-100 opacity-80 transition duration-300' href="">About</Link>
        <Link to='contact' duration={800} offset={-70} smooth={true} className='hover:opacity-100 opacity-80 transition duration-300' href="">Contact</Link>
        <Link to='projects' duration={800} offset={-70} smooth={true} className='hover:opacity-100 opacity-80 transition duration-300' href="">Projects</Link>
      </div>
      <div className='opacity-80 text-sm'>
        created by abhishek
      </div>
    </div>
    <Blur val='justify-center'/>
   </section>
  )
}

export default Footer