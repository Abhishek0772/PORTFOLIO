import Aos from 'aos'
import React from 'react'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

function Home() {

  return (
    <>
    <div id="home" className=''>

    <Hero  />
    <About />
    <Projects/>
    <Skills/>
    </div>
    
    </>
  )
}

export default Home