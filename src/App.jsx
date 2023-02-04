import React from 'react'
import './App.css'
import About from './componats/About'
import Hero from './componats/Hero'
import Navbar from './componats/Navbar'
import Projects from './componats/Projects'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from './componats/Home'
import SeeAll from './componats/SeeAll'

function App() {
  return (
    <>
   
    
<BrowserRouter>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/seeall' element={<SeeAll/>}/>
  {/* <Route path='/contact' element={<Hero/>}/> */}
</Routes>

</BrowserRouter>
    </>
  )
}

export default App