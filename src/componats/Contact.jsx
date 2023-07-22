import React from 'react'
import Blur from './Blur'
// import AOS from 'aos'

function Contact() {
  // AOS.init( {duration:'1000'})
  return (
    <>
    <div id='contact' className='w-full h-screen  flex justify-center items-center relative'>

      <div className='md:w-3/5 w-4/5 flex flex-col justify-around items-center backdrop-blur-3xl bg-slate-200 bg-opacity-20 py-10 rounded-md gap-3'>
        <h2 className='font-bold text-2xl'>Contact Me</h2>
        <form action="#" className='flex flex-col justify-center items-center gap-2'>
          <input type="text" name="" id=""  className='md:w-[300px] w-72 rounded-md bg-transparent py-1 border-[1px] border-black px-2 ' placeholder='Enter your Name'/>
          <input type="password" className='w-72 rounded-md bg-transparent py-1 md:w-[300px] border-[1px] border-black px-2' placeholder='Eneter Your Email Id' />
          <textarea name="" id="" cols="30" rows="10" className='md:w-[300px] w-72 bg-transparent py-1 px-2 border-[1px] border-black'placeholder='Enter Your Massage' ></textarea>
          <button className='border-[1px] border-black py-2 px-5 my-3'> Submit</button>
        </form>

      </div>
    <Blur val='items-center'/>
    </div>
    
    </>
  )
}

export default Contact