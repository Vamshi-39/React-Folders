import React, { memo } from 'react'

const Count = ({text,count}) => {
    console.log(`${text} component rendering...`)
  return (
    <>
    <h1>{text}-{count}</h1>
    </>
  )
}

export default memo(Count)