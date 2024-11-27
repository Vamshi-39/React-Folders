import React from 'react'
import Child2 from './Child2'
const Child1=(props)=>{
    console.log(props)
    return (
        <div>
            <Child2 name1={props.name}/>       
         </div>
    )
}
export default Child1