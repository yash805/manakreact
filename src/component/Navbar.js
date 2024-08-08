import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/good">About</Link>
      <br />
      <Link to="/contact">contact</Link>

    </div>
  )
}

export default Navbar
