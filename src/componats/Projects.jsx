import React from 'react'
import Blur from './Blur'
import Cards from './Cards'

function Projects() {
  return (
    <>
    <section className='relative w-full h-screen' id='projects'>
      <h2 className='text-center my-4 font-bold text-3xl'>PROJECTS</h2>
      <div className='flex flex-wrap justify-center items-center gap-5 md:gap-3'>

    <Cards/>
    <Cards/>
    <Cards/>
      </div>
    <Blur val={'items-center'}/>
    </section>
    </>
  )
}

export default Projects