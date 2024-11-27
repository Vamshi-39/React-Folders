import React from "react"
import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom"

const Home = () => {
  let navigate=useNavigate()
  let handleNavigate=()=>{
    navigate("/contact")

  }
  return (
    <>
    <NavBar/>
    <h1>HOME PAGE</h1><br /><br />
    <button onClick={handleNavigate}>GO TO CONTACT PAGE</button>
    </>
  )
}
export default Home