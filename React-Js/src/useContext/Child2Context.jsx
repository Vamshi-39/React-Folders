import React, { useContext } from 'react'
import Child3Context from './Child3Context'
import { Fun, Obj } from './GlobalContext'

const Child2Context = () => {
 let result =useContext(Fun)
 let{name,age,place, skills,fun}=useContext(Obj)
  return (<>
  <Child3Context/>
  <br></br>
  {/* <button onClick={result}>CLICK</button> */}
  <h1>My name is:{name}</h1>
  <h1>My age is:{age}</h1>
  <h1>I am Living in:{place}</h1>
  <h1>I can do:{skills}</h1>
  <button onClick={fun}>CLICK ME</button>
  </> 
  )
}

export default Child2Context