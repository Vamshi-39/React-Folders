import React from 'react'
import Child3 from './Child3'
const Child2=(props)=>{
    console.log(props)
    return (
        <div>
            <Child3 name2={props.name1}/>
        </div>
    )
}
export default Child2