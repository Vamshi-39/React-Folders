import React, { useContext } from 'react'
import Child2Context from './Child2Context'
import { Place } from './GlobalContext'

const Child1Context = () => {
  let place =useContext(Place)
  // console.log(place)
  return (<>
  {/* <h3>Child1Context-{place}</h3> */}
  <Child2Context/>
  </>
  )
}

export default Child1Context