import React from 'react'
function Cards({title , image ,des ,link}) {
  return (
    <>
    <div className='w-[250px] h-[380px] flex  flex-col items-center gap-3 backdrop-blur-3xl bg-slate-200 bg-opacity-40 rounded-md pb-3'>
     <div className='w-full h-3/5'>
      <img className='w-full h-full rounded-t-md object-cover' src={image} alt="" />
     </div>

      <h3>
        {title}
      </h3>
      <p className='text-center h-10 opacity-80'>
        {des}
      </p>
      <a href={link} target='_blank'><button className='px-2 py-2 mt-2 text-sm border-[1px] rounded-sm hover:scale-105 transition delay-500 border-black backdrop-blur-3xl'>Github Link</button></a>
     </div>
     
    </>

   
  )
}

export default Cards