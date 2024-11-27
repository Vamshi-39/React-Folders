import React, { useState } from 'react'

const Todolist = () => {
 const [list,setList]=useState({listItems:""})
 const {listItems}=list

 const handleSubmit=()=>{
    
 }
 const handleChange=(e)=>{
  setList({listItems:e.target.value})
 }
  return (
    <>
    <h1>TODO LIST</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter the items' value={listItems} name="listItems" onChange={handleChange}></input><br /><br />
    <input type='submit' value="Add Items"></input>
    </form>
    
    
    </>
  )
}

export default Todolist