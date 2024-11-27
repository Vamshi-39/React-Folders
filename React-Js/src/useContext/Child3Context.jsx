import React,{useContext} from 'react'
import { Age, Name } from './GlobalContext'

const Child3Context=()=>{
    let result=useContext(Name)
    // console.log( result)
    let age=useContext(Age)
    // console.log(age)
    return(
        <div> 
            {/* <span>Child3Context</span> */}
            {/* <span>-{result}</span>
            <span>-{age}</span> */}
        </div>
    )
}
export default Child3Context