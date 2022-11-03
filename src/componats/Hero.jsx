import React from 'react'
function Hero() {
  return (
    <>
    <section className='relative h-full'>
      <div className='absolute top-0 flex-wrap filter bg-gray-200 flex justify-center items-center gap-2 -z-10 container mx-auto w-full h-full backdrop-blur-3xl blur-3xl'>
          <div className='h-60 w-60 bg-purple-600 border-3 border-green-400 animate-pulse transform -translate-y-40 rounded-full' ></div>
          <div className='h-60 w-60 bg-yellow-600' ></div>
          <div className='h-60 w-60 bg-red-600' ></div>
      </div>
        <div className='backdrop-blur-3xl bg-slate-200 bg-opacity-20 my-10 w-80 mx-auto p-3 rounded-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem vero harum soluta voluptatem ullam dolor ut veniam ab odit, ex alias sint aliquid libero aspernatur quaerat hic impedit expedita.
        </div>
    </section>
    
    </>
  )
}

export default Hero