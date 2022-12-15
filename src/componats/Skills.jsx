import React from 'react'
import { HiCode } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'
import { SiZendframework } from 'react-icons/si'
import Blur from './Blur'
function Skills() {
  return (
    <section className='h-screen w-full relative bg-slate-100 bg-opacity-20'>
      <h2 className='text-center text-5xl font-bold mb-7'>
        Skills
      </h2>
      <div className='flex justify-center items-start gap-9 bg-slate-200 bg-opacity-20 backdrop-blur-3xl py-5 flex-wrap'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <CgWebsite className='text-white w-40 h-40 rounded-full bg-pink-600' />
          <h2 className='bg-gradient-to-r from-purple-600 to-pink-500 p-1 px-2'>
            web development
          </h2>
          <ul className='flex justify-center items-center flex-col gap-4 mt-5'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center gap-4'>
          <HiCode className='text-white w-40 h-40 rounded-full bg-pink-600' />
          <h2 className='bg-gradient-to-r from-purple-600 to-pink-500 p-1 px-2'>programing</h2>
          <ul className='flex justify-center items-center flex-col gap-4 mt-5'>
            <li>C/C++</li>
            <li>JAVA</li>
            <li>PYTHON</li>
          </ul>
          </div>
         
        <div className='flex flex-col justify-center items-center gap-4'>
          <SiZendframework className='text-white w-40 h-40 rounded-full bg-pink-600' />
          <h2 className='bg-gradient-to-r from-purple-600 to-pink-500 p-1 px-2'>
            frameworks</h2>
            <ul className='flex justify-center items-center flex-col gap-4 mt-5'>
            <li>REACT JS</li>
            <li>BOOTSTRAP</li>
            <li>TAILWIND CSS</li>
            <li>DJANGO</li>
            <li>FLASK</li>
          </ul>
          </div>
      </div>
      <Blur val='items-center'/>
    </section>
  )
}

export default Skills