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

        <div className=" flex justify-around items-center py-2 md:bg-slate-300 md:bg-opacity-20">
          {/* logo */}
          <div className='font-bold text-3xl'>
            <Link to='home' duration={800} smooth={true} offset={-70} className='cursor-pointer'>
              ABHI
            </Link>

          </div>
          <div className='md:visible  '>
            <ul className='hidden md:flex justify-center gap-3'>
              <Link to='home' duration={800} offset={-70} smooth={true} className='cursor-pointer'><li>HOME</li></Link>
              <Link className='cursor-pointer' to='about' duration={800} smooth={true} ><li>ABOUT</li></Link>
              <Link className='cursor-pointer' to='home' duration={800} smooth={true}><li>CONTACT</li></Link>
              <Link className='cursor-pointer' to='projects'offset={-70} duration={800} smooth={true}><li>PROJECTS</li></Link>
            </ul>
          </div>
          <div className='md:hidden w-8 flex flex-col items-end justify-end gap-1' onClick={clicked}>
            <div className='bg-black h-1 w-7   rounded-sm'></div>
            <div className='bg-black h-1 w-5  rounded-sm'></div>
            <div className='bg-black h-1 w-4   rounded-sm'></div>
          </div>
        </div >
        <div id='menu'>
          <ul className={` bg-slate-200 bg-opacity-40 flex flex-col items-start px-3 fixed w-full md:hidden gap-2 py-2 z-20 transition duration-1000 ${click ? 'left-100' : '-left-full'} `}>
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