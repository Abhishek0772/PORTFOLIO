import React from 'react'
import { useState } from 'react'
import '../App.css'
import { Link, animateScroll as scroll } from "react-scroll";
function Navbar() {
  const [click, setclick] = useState(false)
  const clicked = () => {
    setclick(!click)
    console.log(click)
  }
  return (
    <>
      <nav className='fixed top-0 w-full z-10 mb-5'>

        <div className=" flex justify-around items-center py-2">
          {/* logo */}
          <div className='font-bold text-3xl'>
            <Link to='home' duration={800} smooth={true} offset={-70} className='cursor-pointer'>
              ABHI
            </Link>
            </div>
          <div className='w-8 flex flex-col items-end justify-end gap-1 z-10' onClick={clicked}>
            <div className={`${click ? 'transition duration-800 w-7 rotate-45 translate-y-[2px]':'transition duration-1000 w-9 mb-1'} bg-black h-1 w-7   rounded-sm`}></div>
            <div className={`${click ? 'transition duration-800 w-7  -rotate-45 transform translate-x-[1px] -translate-y-[5px]':'transition duration-1000 w-7 mb-1'} bg-black h-1   rounded-sm`}></div>
            <div className={`${click ? 'transition duration-800 opacity-0' : 'transition duration-1000 w-4 opacity-100'} bg-black h-1    rounded-sm`}></div>
          </div>
        </div >
        <div id='menu' className={`${click ? '':'navbar'}  backdrop-blur-3xl absolute top-0 opacity-100 bg-slate-500 bg-opacity-20 `}>
          <ul className={` flex flex-col items-start px-3 h-screen w-52 gap-2 py-2 z-20 transition duration-1000 backdrop-blur-3xl my-10`}>
          <Link to='home' duration={800} offset={-70} smooth={true} className='cursor-pointer'><li>HOME</li></Link>
              <Link className='cursor-pointer' to='about' duration={800} smooth={true} offset={-70}><li>ABOUT</li></Link>
              <Link className='cursor-pointer' to='home' duration={800} smooth={true}><li>CONTACT</li></Link>
              <Link className='cursor-pointer' to='projects'offset={-70} duration={800} smooth={true}><li>PROJECTS</li></Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar