import React from 'react'
import Blur from './Blur'
import web1 from '../img/html5.png'
import web2 from '../img/css.png'
import web3 from '../img/js.png'
import web4 from '../img/react.png'
// import web5 from '../img/js.png'
// import web6 from '../img/js.png'
// import web7 from '../img/js.png'
function Skills() {
  const web = [
    {
      name: 'HTML',
      src: web1,
    },
    {
      name: 'HTML',
      src: web2,
    },
    {
      name: 'HTML',
      src: web3,
    },
   ]
  const fdev = [
    {
      name: 'HTML',
      src: web1,
    },
    {
      name: 'HTML',
      src: web2,
    },
    {
      name: 'HTML',
      src: web3,
    },
   ]
  const pro = [
    {
      name: 'HTML',
      src: web1,
    },
    {
      name: 'HTML',
      src: web2,
    },
    {
      name: 'HTML',
      src: web3,
    },
   ]
  return (
    <section className='relative h-screen flex items-center justify-center flex-col '>
      <h2 className='font-bold text-3xl'>SKILL`S</h2>
      <div className='backdrop-blur-xl w-4/5 flex justify-center items-center rounded-xl gap-1 flex-wrap flex-col'>
<div className='flex justify-center items-center p-5 rounded-xl gap-5 flex-wrap'>

      {
        web.map((val) => {
          
          return (<div className='w-32 h-32 bg-slate-200 bg-opacity-40 backdrop-blur-3xl rounded-xl '>
            <div className='w-full h-full flex flex-col items-center justify-center p-2'>
              <img className='w-3/4 h-3/4 object-cover' src={val.src} alt="" />
              <p className='font-bold'>{val.name}</p>
            </div>
          </div>)
        })
      }
      </div>
<div className='flex justify-center items-center p-5 rounded-xl gap-5 flex-wrap'>

      {
        fdev.map((val) => {
          
          return (<div className='w-32 h-32 bg-slate-200 bg-opacity-40 backdrop-blur-3xl rounded-xl '>
            <div className='w-full h-full flex flex-col items-center justify-center p-2'>
              <img className='w-3/4 h-3/4 object-cover' src={val.src} alt="" />
              <p className='font-bold'>{val.name}</p>
            </div>
          </div>)
        })
      }
      </div>
<div className='flex justify-center items-center p-5 rounded-xl gap-5 flex-wrap'>

      {
        pro.map((val) => {
          
          return (<div className='w-32 h-32 bg-slate-200 bg-opacity-40 backdrop-blur-3xl rounded-xl '>
            <div className='w-full h-full flex flex-col items-center justify-center p-2'>
              <img className='w-3/4 h-3/4 object-cover' src={val.src} alt="" />
              <p className='font-bold'>{val.name}</p>
            </div>
          </div>)
        })
      }
      </div>
      </div>
      <Blur val='items-center' />
    </section>
  )
}

export default Skills