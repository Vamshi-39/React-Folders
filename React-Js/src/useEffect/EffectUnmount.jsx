import React, { useEffect } from 'react'

const EffectUnmount = () => {
    useEffect(()=>{
        return()=>{
           console.log("useEffect Acting like unmounting phase!")
        }
    })
  return (
    <h1>EffectUnmount</h1>
  )
}

export default EffectUnmount