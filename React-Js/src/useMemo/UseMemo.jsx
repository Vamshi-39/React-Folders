import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    let [state1,setState1]=useState(0)
    let [state2,setState2]=useState(10)
    let handleState1=()=>{
        setState1(state1+1)
        isEven()
    }
    let handleState2=()=>{
        setState2(state2+10)
    }
    let isEven=useMemo(()=>{
        let i=0
        while(i<10000000)i++
         return state1%2
    })
  return (<>
  <h1>INCRIMENT COUNT1 :{state1}</h1>
  <button onClick={handleState1}>CLICK 1</button><br />
  <h1 style={{border:"2px dashed red", height:"50px", width:"80px",padding:"7px"}}>{isEven?"Odd":"Even"}</h1>
  <br />
  <h1>INCRIMENT COUNT2 :{state2}</h1>
  <button onClick={handleState2}>CLICK 2</button>
  
  </> 
  )
}

export default UseMemo