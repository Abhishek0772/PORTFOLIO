import React from 'react'
import abhi from '../img/abhi.jpg'
import Blur from './Blur';

function About() {
    return (
        <>
        <div className='relative h-screen'>
        
        <div className='w-full bg-slate-300 bg-opacity-30 flex justify-center items-center flex-wrap p-2'>
            <div className='w-[300px] h-[400px] p-5 shadow-md shadow-black'>
                <img className='w-full h-full  ' src={abhi} alt="" />
            </div>
            <div className='w-1/2'>
                <h3 className='text-3xl font-bold '>About Me</h3>
                <span>developer & designer </span>
                <p className=''>I am a front-end developer. i can proved you a clean code and pixel perfect design. i also make the website more and more interactive with web animation. A responsive design make your website accessible to all users. regardless of their devices </p>
            </div>
        </div>
        <Blur val = {'items-start'}/>
        </div>
        </>
    )
}

export default About