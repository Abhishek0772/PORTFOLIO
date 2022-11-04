import React from 'react'
import Cards from './Cards'
function Hero() {
  return (
    <>
    <section className='relative h-full'>
      <div className='absolute top-0 flex-wrap filter bg-gray-300 flex justify-center items-center gap-2 -z-10 container mx-auto w-full h-full backdrop-blur-3xl blur-3xl'>
          <div className='h-60 w-60 bg-purple-600 border-3 border-green-400 transform -translate-y-40 rounded-full' ></div>
          <div className='h-60 w-60 bg-yellow-400 border-8 border-green-500' ></div>
          <div className='h-60 w-60 bg-red-400' ></div>
      </div>
      <div>

        <div className='backdrop-blur-3xl bg-slate-200 bg-opacity-20 my-10 w-80 mx-auto p-3 rounded-md shadow-sm shadow-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem vero harum soluta voluptatem ullam dolor ut veniam ab odit, ex alias sint aliquid libero aspernatur quaerat hic impedit expedita.
        </div>
      </div>
      <Cards/>
    </section>
    
    </>
  )
}

export default Hero