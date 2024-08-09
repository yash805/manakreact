import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Navbar from './component/Navbar'
import User from './component/User'
import Filter from './component/Filter'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/good" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/user/:name" element={<User />} />
             <Route path="/filter" element={<Filter />} />

             <Route path='/*' element={<Home />} />
          </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App
