import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'



// import Data from './Components/Data'

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
