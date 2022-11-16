import React from 'react'
import Blur from './Blur'
function Contact() {
  return (
    <>
    <div id='contact' className='w-full h-screen  flex justify-center items-center relative'>

      <div className='md:w-3/5 w-4/5 flex flex-col justify-around items-center backdrop-blur-3xl bg-slate-200 bg-opacity-20 py-10 rounded-md gap-3'>
        <h2 className='font-bold text-2xl'>Contact Me</h2>
        <form action="#" className='flex flex-col justify-center items-center gap-2'>
          <input type="text" name="" id=""  className='md:w-3/4 w-4/5 rounded-md bg-transparent py-1 border-[1px] border-black'/>
          <input type="password" className='md:w-3/4 w-4/5 rounded-md bg-transparent py-1 border-[1px] border-black' />
          <textarea name="" id="" cols="30" rows="10" className='md:w-3/4 w-4/5 bg-transparent py-1 border-[1px] border-black'></textarea>
        </form>

      </div>
    <Blur val='items-center'/>
    </div>
    
    </>
  )
}

export default Contact