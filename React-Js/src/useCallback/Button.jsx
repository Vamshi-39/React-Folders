import React, { memo } from 'react'

const Button = ({children,fun}) => {
    console.log(`${children} component rendering....`)
  return (
    <button onClick={fun}>{children}</button>
  )
}

export default memo(Button)