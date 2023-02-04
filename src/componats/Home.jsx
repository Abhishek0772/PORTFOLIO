import Aos from 'aos'
import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

function Home() {

  return (
    <>
    <div id="home" className='overflow-hidden'>

    <Hero  />
    <About />
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Home