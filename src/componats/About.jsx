import React from 'react'
import abhi from '../img/abhi.jpg'
import Blur from './Blur';
import "aos/dist/aos.css";
// import AOS from 'aos';
import {useEffect} from 'react'
function About() {

    return (
        <>
        <div className='relative my-8 h-full flex items-center justify-center' id='about'>
        
        <div className='w-11/12 rounded-xl bg-slate-200 bg-opacity-20 flex justify-center items-center flex-wrap p-2 py-3 backdrop-blur-3xl'>
            <div className=' h-[400px] p-5'>
                <img className='w-full h-full object-cover' src={abhi} alt="" />
            </div>
            <div className='md:w-1/2 px-2 flex justify-start flex-col md:items-start items-center '>
                <h3 className='text-3xl font-bold my-1'>About Me</h3>
                <span className='mt-1 bg-gradient-to-r from-purple-600 to-pink-500 p-1 px-2 bg-opacity-60 text-white'>developer & designer </span>
                <p className='p-3 text-center md:text-start'>I am a front-end developer. i can proved you a clean code and pixel perfect design. i also make the website more and more interactive with web animation. A responsive design make your website accessible to all users. regardless of their devices </p>
            <button className='bg-gradient-to-br from-teal-500 to-purple-600 p-2 text-white rounded-sm shadow-sm shadow-slate-600 my-3  transition delay-200 ease-linear hover:scale-105 hover:shadow-gradient-to-br hover:from-orange-400 hover:to-red-400 '>Hire Me</button>
            </div>
        </div>
        <Blur val = {'items-center'}/>
        </div>
        </>
    )
}

export default About