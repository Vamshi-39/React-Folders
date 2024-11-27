import React from 'react'

const Welcome = ({name}) => {
    if(name=="Vamshi")
    {
        throw new Error("Hi")
    }
  return (
    <div>Welcome-{name}</div>
  )
}

export default Welcome