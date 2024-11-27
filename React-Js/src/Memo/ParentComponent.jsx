import React, { useState } from 'react'
import RegularComponent from './RegularComponent'
import MemoComponent from './MemoComponent'

const ParentComponent = () => {
    let [details,setDetails]=useState({name:"Vamshi"})
  return (
    <div>
        <RegularComponent val1={details.name}/><br />
        <MemoComponent val2={details.name}/><br />
        <button onClick={()=>setDetails({name:"REACT"})}>CLICK TO CHANGE STATE</button>
    </div>
  )
}

export default ParentComponent