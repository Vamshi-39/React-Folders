import React, { forwardRef } from 'react'

const FRchild = forwardRef((props,refs)=>{
  console.log(props)
  console.log(refs)

  return(
    <>
    <input type='text' ref={refs}/>
    </>
  )
})


export default FRchild