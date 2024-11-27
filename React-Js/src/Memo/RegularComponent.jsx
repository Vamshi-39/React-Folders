import React from 'react'

const RegularComponent = ({val1}) => {
    console.log("Regular Component is rendering.....")
  return (
    <div>RegularComponent-{val1}</div>
  )
}

export default RegularComponent