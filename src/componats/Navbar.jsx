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
    <div className="flex justify-around items-center">
        {/* logo */}
        <div className='font-bold text-2xl'>
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
    <div id='menu' className={click?'visible md:hidden':'hidden '}>
    <ul className='backdrop-blur-3xl bg-slate-600 bg-opacity-10 flex flex-col items-start px-3'>
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