import React, { useRef } from 'react'
import FRchild from './FRchild'

const FRparent = () => {
    let focusRef=useRef()

    let handleFocus=()=>{
        focusRef.current.focus()
    }
  return (
    <>
    <FRchild ref={focusRef} name="Rahul"/>
    <br />
    <br />
    <button onClick={handleFocus}>CLICK TO FOCUS🤷‍♂️</button>
    
    </>
  )
}

export default FRparent