import React from 'react'
import {FiFacebook }  from 'react-icons/fi'
import {FiInstagram}  from 'react-icons/fi'
import {FiLinkedin}  from 'react-icons/fi'
import {AiOutlineGithub}  from 'react-icons/ai'
import Blur from './Blur'
function Footer() {
  return (
   <section className='absolute w-full'>
    <div className='w-full  justify-center items-center flex flex-col h-64 bg-slate-200 bg-opacity-20 backdrop-blur-2xl gap-3'>
      <div className="flex justify-center items-center gap-3">
      <FiFacebook  className='border-[1px]  border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150'  />
      <FiInstagram className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150' />
      <FiLinkedin className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150' />
      <AiOutlineGithub className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-300' />
      </div>
      <div className='flex gap-3 my-2 '>
        <a className='hover:opacity-100 opacity-80 transition duration-300' href="">Home</a>
        <a className='hover:opacity-100 opacity-80 transition duration-300' href="">About</a>
        <a className='hover:opacity-100 opacity-80 transition duration-300' href="">Contact</a>
        <a className='hover:opacity-100 opacity-80 transition duration-300' href="">Projects</a>
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