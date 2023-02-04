import React from 'react'

function Blur({val}) {
  return (
    <div className={`absolute top-0 flex-wrap backdrop-blur-3xl bg-gray-100 flex justify-center gap-4 -z-10 container mx-auto w-full h-full ${val} overflow-hidden  bg-blend-overlay blur-xl`}>
    <div className='bg-blend-screen  h-52 w-52 md:w-60 bg-purple-600 border-3 border-green-400  rounded-full' ></div>
    <div className=' h-60 w-52 md:w-60 bg-yellow-500 rounded-full '></div>
    <div className=' h-52 w-52 md:w-60 bg-blue-600  rounded-full' ></div>
</div>
  )
}

export default Blur