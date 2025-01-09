import React from 'react'
import {
    Link, NavLink
    
 } from 'react-router-dom'

function Navbar() {
  return (
      <nav className='w-full flex items-center justify-center gap-7'>
          <Link to={'/'}>Home</Link>
          <Link to={'/aboutus'}>About us</Link>
          <Link to={'/login'}>Login</Link>
          
    </nav>
  )
}

export default Navbar


// navlink, useParams, useNavigate