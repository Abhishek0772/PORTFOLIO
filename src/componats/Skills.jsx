import React from 'react'
import Blur from './Blur'
import web1 from '../img/html5.png'
import web2 from '../img/css.png'
import web3 from '../img/js.png'
import web4 from '../img/react.png'
import web3 from '../img/js.png'
import web3 from '../img/js.png'
import web3 from '../img/js.png'
function Skills() {
  const data = [
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
    }]
  return (
    <section className='relative h-screen flex items-center justify-center gap-3'>
      {
        data.map((val) => {

          return (<div className='w-32 h-32 bg-slate-200 bg-opacity-20 backdrop-blur-3xl rounded-xl '>
            <div className='w-full h-full flex flex-col items-center justify-center p-2'>
              <img className='w-3/4 h-3/4 object-cover' src={val.src} alt="" />
              <p className='font-bold'>{val.name}</p>
            </div>
          </div>)
        })
      }
      <Blur val='items-center' />
    </section>
  )
}

export default Skills