import React, { memo } from 'react'

const MemoComponent = ({val2}) => {
    console.log("Memo Component Rendering....")
  return (
    <div>MemoComponent-{val2}</div>
  )
}

export default memo(MemoComponent )