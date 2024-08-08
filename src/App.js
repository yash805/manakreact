import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
             <Route path="/good" element={<About />} />
             <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App
