import React from 'react'
import {FiFacebook }  from 'react-icons/fi'
import {FiInstagram}  from 'react-icons/fi'
import {FiLinkedin}  from 'react-icons/fi'
import Blur from './Blur'
function Footer() {
  return (
   <section className='absolute w-full'>
    <div className='w-full flex justify-center items-center h-64 bg-slate-200 bg-opacity-20 backdrop-blur-2xl'>
      <div className="flex justify-center items-center gap-3">
      <FiFacebook  className='border-[1px]  border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150'  />
      <FiInstagram className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150' />
      <FiLinkedin className='border-[1px] border-black w-8 py-1 px-1 h-8 rounded-full hover:scale-110 transition duration-150' />
      </div>
    </div>
    <Blur val='justify-center'/>
   </section>
  )
}

export default Footer