import React from "react"
import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom"

const Contact = () => {
  let navigate=useNavigate()
  let handleNavigate=()=>{
    navigate(-1)
  }
  return (
    <>
    <NavBar/>
    <h1>CONTACT PAGE</h1><br /><br />
    <button onClick={handleNavigate}>GO TO PREVIOUS PAGE</button>
    </>
  )
}
export default Contact