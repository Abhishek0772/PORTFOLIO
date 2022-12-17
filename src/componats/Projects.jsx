import React from 'react'
import Blur from './Blur'
import Cards from './Cards'
import chatbot from '../img/chatbot.png'
import movies from '../img/movie.png'
import myimage from '../img/myweb.png'
import AOS from 'aos'

function Projects() {
  const proj = {
    img: chatbot,
    title: 'Chatbot ',
    description: 'chatbot based on inquiry system using html css js...',
    link:'https://github.com/Abhishek0772/Chatbot-bassed-inqury-system-s-usnig-flask'
  }
  const movie = {
    img: movies,
    title: 'Movie Info App ',
    description: 'Movie info app using OMDB APi and react js ',
    link:'https://github.com/Abhishek0772/Movie-Library'
  }
  const Portfolio = {
    img: myimage,
    title: 'My portfolio website ',
    description: 'Portfolio website using react js',
    link:'https://github.com/Abhishek0772/myWebSite'
  }
  AOS.init({
    duration: 1000,})
  return (
    <>
    <section className='relative w-full h-full md:h-screen backdrop-blur-3xl' id='projects'>
      <h2 className='text-center my-4 font-bold text-3xl'>PROJECTS</h2>
      <div className='flex flex-wrap justify-center items-center gap-5 md:gap-3'data-aos="fade-up"
     data-aos-anchor-placement="top-center">

    
   <Cards title={proj.title} image = {proj.img} des={proj.description} link={proj.link}/> 
   <Cards title={movie.title} image = {movie.img} des={movie.description} link={movie.link}/> 
   <Cards title={Portfolio.title} image = {Portfolio.img} des={Portfolio.description} link={Portfolio.link}/> 
  
      </div>
    <Blur val={'items-center'}/>
    </section>
    </>
  )
}

export default Projects