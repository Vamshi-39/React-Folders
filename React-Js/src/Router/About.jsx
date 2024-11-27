import React from "react"
import NavBar from "./NavBar"
import { NavLink, Outlet } from "react-router-dom"

const About = () => {
  return (
    <>
    <NavBar/>
    <h1>ABOUT PAGE</h1>
    <nav>
      <ul>
        <li><NavLink to="/about/profile">Profile</NavLink></li>
        <li><NavLink to="/about/message">Message</NavLink></li>
      </ul>
    </nav>
    {/* <Outlet/> */}
    </>
  )
}
export default About