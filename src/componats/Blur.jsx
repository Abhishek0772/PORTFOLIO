import React from 'react'

function Blur({val}) {
  return (
    <div className={`absolute top-0 flex-wrap filter bg-gray-300 flex justify-center  gap-4 transform translate-y-20 -z-10 container mx-auto w-full h-full backdrop-blur-3xl blur-3xl ${val}`}>
    <div className='h-60 w-60 bg-purple-600 border-3 border-green-400  rounded-full' ></div>
    <div className='h-60 w-60 bg-yellow-400 border-8 rounded-full border-green-500' ></div>
    <div className='h-60 w-60 bg-red-400 rounded-full' ></div>
</div>
  )
}

export default Blur