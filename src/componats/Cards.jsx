import React from 'react'
function Cards({title , image ,des ,link ,preview}) {
  return (
    <>
    <div className='w-[250px] h-[380px] flex  flex-col items-center gap-3 backdrop-blur-3xl bg-slate-200 bg-opacity-20 rounded-md pb-3'>
     <div className='w-full h-3/5'>
      <img className='w-full h-full rounded-t-md object-cover' src={image} alt="" />
     </div>

      <h3 className='font-bold'>
        {title}
      </h3>
      <p className='text-center h-10 text-gray-800 text-sm px-3'>
        {des}
      </p>
      <div className="flex justify-center itmes-center gap-3">

      <a href={link} target='_blank'><button className='px-2 py-2 mt-2 text-sm border-[1px] rounded-sm hover:scale-105 transition delay-500 border-gray-500 backdrop-blur-3xl'>Github Link</button></a>
      <a href={preview} target='_blank'><button className='px-2 py-2 mt-2 text-sm border-[1px] rounded-sm hover:scale-105 transition delay-500 border-gray-500 backdrop-blur-3xl bg-slate-100 bg-opacity-25  '>Live Preview</button></a>
      </div>
     </div>
     
    </>

   
  )
}

export default Cards