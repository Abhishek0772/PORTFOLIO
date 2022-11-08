import React from 'react'
import Blur from './Blur'
import Cards from './Cards'

function Projects() {
  return (
    <>
    <section className='relative w-full h-screen my-2'>
      <h2 className='text-center my-4 text-bold'>PROJECTS</h2>
    <Cards/>
    <Blur val={'items-center'}/>
    </section>
    </>
  )
}

export default Projects