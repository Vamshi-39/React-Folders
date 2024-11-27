import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/service">SERVICE</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav