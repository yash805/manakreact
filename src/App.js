import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About'
import Company from './component/Company'
import Contact from './component/Contact'
import Filter from './component/Filter'
import Home from './component/Home'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Protected from './component/Protected'
import User from './component/User'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
             <Route path="/" element={<Protected Component={Home} />} />
             <Route path="/login" element={<Login />} />

             <Route path="/good" element={<Protected Component={About} />} />
             <Route path="/contact/" element={<Contact />} >
                 <Route path="company" element={<Company />} />            
             </Route>
             <Route path="/user/:name" element={<User />} />
             <Route path="/filter" element={<Filter />} />

             <Route path='/*' element={<Home />} />
            


          </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App
