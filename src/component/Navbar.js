import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">home</NavLink>
      <br />
      <NavLink to="/login">Login</NavLink>
      <br />
      <NavLink to="/good">About</NavLink>
      <br />
      <NavLink to="/contact">contact</NavLink>
      <br />
      <NavLink to="/user/sam">sam</NavLink>
      <br />
      <NavLink to="/user/rahul">rahul</NavLink>
      <br />
      <NavLink to="/filter">filter</NavLink>
    </div>
  )
}

export default Navbar
