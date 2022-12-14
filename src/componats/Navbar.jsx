import React from 'react'
import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { RiContactsLine } from 'react-icons/ri'
import { VscProject } from 'react-icons/vsc'
import '../App.css'
import abhi from '../img/abhi.jpg'
import Blur from './Blur'
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
          <div className='w-8 flex flex-col items-end justify-end gap-1 z-10 cursor-pointer' onClick={clicked}>
            <div className={`${click ? 'transition duration-800 w-7 rotate-45 translate-y-[2px]' : 'transition duration-1000 w-9 mb-1'} bg-black h-1 w-7   rounded-sm`}></div>
            <div className={`${click ? 'transition duration-800 w-7  -rotate-45 transform translate-x-[1px] -translate-y-[5px]' : 'transition duration-1000 w-7 mb-1'} bg-black h-1   rounded-sm`}></div>
            <div className={`${click ? 'transition duration-800 opacity-0' : 'transition duration-1000 w-4 opacity-100'} bg-black h-1    rounded-sm`}></div>
          </div>
        </div >
        <div id='menu' className={`${click ? 'navbar' : '-left-full'} fixed top-0 backdrop-blur-2xl bg-slate-00 bg-opacity-20 z-10 `}>
          <ul className={` flex flex-col items-center justify-start h-screen w-52 md:w-40 gap-2 z-20  py-10  relative`}>
            <li >
              <img className='rounded-full w-24 h-24 object-cover' src={abhi} alt="" />
            </li>
            <Link to='home' duration={800} offset={-70} smooth={true} className='transition duration-300 mt-2 cursor-pointer  hover:bg-purple-400 p-2 hover:backdrop-blur-3xl'><li className='flex justify-start items-center gap-2 w-28 text-start'><AiOutlineHome className='w-5 h-5'/> HOME</li></Link>
            <Link className='cursor-pointer transition duration-300 hover:bg-purple-400 p-2 hover:backdrop-blur-3xl' to='about' duration={800} smooth={true} offset={-70}><li className='flex justify-start items-center gap-2 w-28'><CgProfile className='w-5 h-5'/>ABOUT</li></Link>
            <Link className='cursor-pointer transition duration-300 hover:bg-purple-400 p-2 hover:backdrop-blur-3xl ' to='contact' duration={800} smooth={true}><li className='flex justify-start items-center gap-2 w-28'><RiContactsLine className='w-5 h-5'/>CONTACT</li></Link>
            <Link className='cursor-pointer transition duration-300  hover:bg-purple-400 p-2 hover:backdrop-blur-3xl' to='projects' offset={-70} duration={800} smooth={true}><li className='flex justify-start items-center gap-2 w-28'><VscProject className='w-5 h-5'/>PROJECTS</li></Link>

          </ul>
        </div>
      </nav>
      <Blur val='items-end' />
    </>
  )
}

export default Navbar