import React from 'react'
import Blur from './Blur'
import Cards from './Cards'

function Projects() {
  return (
    <>
    <section className='relative  h-screen my-2'>
      <h2 className='text-center my-4 text-bold'>PROJECTS</h2>
    <Cards/>
    <Blur/>
    </section>
    </>
  )
}

export default Projects