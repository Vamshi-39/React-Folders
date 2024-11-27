import React from 'react'
import Hoc from './Hoc'

const HChild2 = ({name,age}) => {
  return (
    <div>HChild2-{name}-{age}</div>
  )
}

export default Hoc(HChild2)