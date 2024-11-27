import React from 'react'
import {createPortal} from 'react-dom'

const Portal = () => {
  return (
   createPortal(
    <>
    <h1>Portal</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eius recusandae assumenda quo voluptatibus harum molestias suscipit qui, facere hic necessitatibus natus nam sunt quasi repudiandae. Vel, et. Possimus, non?</p>
    <button>CLICK</button>
    </>,document.querySelector("#portal")
   )
  )
}

export default Portal