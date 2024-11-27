import React, { memo } from 'react'

const Title = ({title}) => {
  console.log(`${title} component is rendering...`)
  return (
    <h1>USE CALLBACK</h1>
  )
}

export default memo(Title)