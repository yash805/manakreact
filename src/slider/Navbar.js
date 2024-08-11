import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="home" smooth={true} duration={700}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={700}>About</Link></li>
        <li><Link to="footer" smooth={true} duration={700}>Footer</Link></li>
        <li>
            <a href="https:www.facebook.com" style={{textDecoration:'none'}}  target="_blank">facebook</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
