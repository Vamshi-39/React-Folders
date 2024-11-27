import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
const Message = () => {
  let navigate=useNavigate()
  let handleNavigate=()=>{
    navigate("/about")
  }
  return (
    <div>
    <nav>
      <ul>
        <li><NavLink to="/about/profile">Profile</NavLink></li>
        <li><NavLink to="/about/message">Message</NavLink></li>
      </ul>
    </nav>
    <h1>MESSAGES</h1>
    <button onClick={handleNavigate}>GO TO HOME PAGE</button>
    </div>
  )
}
export default Message