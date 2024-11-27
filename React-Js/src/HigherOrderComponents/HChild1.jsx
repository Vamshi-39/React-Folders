import React from 'react'
import HChild2 from './HChild2'
import Hoc from './Hoc'

const HChild1 = ({name,age}) => {
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <HChild2/>
    </>
  )
}

export default Hoc(HChild1)