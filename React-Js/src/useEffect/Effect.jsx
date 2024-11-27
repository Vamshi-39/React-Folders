import React, { useEffect, useState } from 'react'
import EffectUnmount from './EffectUnmount'

const Effect = () => {
    let [age,setAge]=useState(21)
    let [salary,setSalary]=useState(10000)
    let [state,setState]=useState("Vamshi")
     let [remove,setRemove]=useState(true)
    // useEffect(()=>{
    //     console.log("useEffect running like updating phase")
    // },[age,salary])
    // useEffect(()=>{
    //     console.log("useEffect running like mounting phase")
    // },[])

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState("REACT")}>CLICK TO CHANGE STATE</button>
      <br /><br />
      <h1>{age}</h1>
      <button onClick={()=>setAge(age+1)}>Click to change age</button>
      <br /><br />
      <h1>{salary}</h1>
      <button onClick={()=>setSalary(salary+10000)}>Click to change salary</button>
      <br /><br />
      <h1>UNMOUNTING PHASE</h1>
      {
         remove?<EffectUnmount/>:<></>
      }
      <button onClick={()=>setRemove(false)}>click to Unmount</button>
    </div>
  )
}

export default Effect