import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentCallback = () => {
    let [age,setAge]=useState(20)
    let [salary,setSalary]=useState(20000)

    let handleAge=useCallback(()=>{
      setAge(age+1)
  },[age])
    let handleSalary=useCallback(()=>{
      setSalary(salary+10000)
  },[salary])
  return (
    <div>
    <Title title="Title"/>
    <Count text="Age" count={age}/>
    <Button fun={handleAge}>Increment Age</Button>
    <Count text="Salary" count={salary}/>
    <Button fun={handleSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentCallback