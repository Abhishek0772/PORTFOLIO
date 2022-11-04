import React from 'react'
import Blur from './Blur'
import Cards from './Cards'
function Hero() {
  return (
    <>
    <section className='relative h-screen'>
        <div>
        <div className='backdrop-blur-3xl bg-slate-200 bg-opacity-20 my-10 w-80 mx-auto p-3 rounded-md shadow-sm shadow-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem vero harum soluta voluptatem ullam dolor ut veniam ab odit, ex alias sint aliquid libero aspernatur quaerat hic impedit expedita.
        </div>
      </div>
      <Blur/>
    </section>
    
    </>
  )
}

export default Hero