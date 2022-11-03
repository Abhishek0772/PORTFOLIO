import React from 'react'
import {useState} from 'react'
function Navbar() {
    const [click , setclick] = useState(false)
    const clicked = ()=>{
      setclick(!click)
      console.log(click)
    }
  return (
    <>
    <div className="flex justify-around items-center py-2 bg-gray-200 backdrop-blur-3xl bg-opacity-20">
        {/* logo */}
        <div className='font-bold text-3xl'>
            ABHI
        </div>
        <div className='md:visible  '>
            <ul className='hidden md:flex justify-center gap-3'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>PROJECTS</li>
            </ul>
        </div>
        <div className='md:hidden' onClick={clicked}>
         <div className='bg-black h-1 w-6 my-1  rounded-sm'></div>
         <div className='bg-black h-1 w-6 my-1  rounded-sm'></div>
         <div className='bg-black h-1 w-6 my-1  rounded-sm'></div>
        </div>
    </div >
    <div id='menu' className={click?'visible md:hidden transition-all delay-100':'hidden'}>
    <ul className='filter backdrop-blur-3xl bg-slate-200 bg-opacity-10 flex flex-col items-start px-3 fixed w-full gap-2 py-2'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>PROJECTS</li>
            </ul>
    </div>
    </>
  )
}

export default Navbar