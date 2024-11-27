import React from 'react'
import { createPortal } from 'react-dom'
import './PortalTask.module.css'

const PortalsTask = ({fun}) => {
  return (
    createPortal(
      <div id="main">
        <div id="container">
        <h1>PORTAL TASK</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit dignissimos nemo quasi, officiis architecto reprehenderit adipisci placeat laborum libero vitae corrupti provident quas, earum eum minus. Assumenda, praesentium vitae?</p>
        <button onClick={fun} id="back-btn">GO BACK</button>
        </div>
     </div>
        ,document.getElementById("modal")
    )
  )
}

export default PortalsTask