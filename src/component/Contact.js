import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>contact page</h1>
      <Link to="company">company</Link>
      <Link to="checks">checks</Link>
      <Outlet />

    </div>
  )
}

export default Contact
