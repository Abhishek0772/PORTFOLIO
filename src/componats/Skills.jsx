import React from 'react'
import Blur from './Blur'
import web1 from '../img/html5.png'
import web2 from '../img/css.png'
import web3 from '../img/js.png'
function Skills() {
  return (
    <section className='relative'>
      <div className='w-full flex justify-center items-center'>

        <div className='w-12 h-12'>
          <img className='w-full h-full object-cover' src={web1} alt="" />
        </div>
        <div className='w-12 h-12'><img  className='w-full h-full object-cover' src={web2} alt="" /></div>
        <div className='w-12 h-12'><img  className='w-full h-full object-cover'  src={web3} alt="" /></div>
      </div>
        <Blur val='items-center'/>
    </section>
  )
}

export default Skills