import React, { Fragment, useState } from 'react'
const Todoapp = () => {
    let[list,setList]=useState({listItems:""})

    let [listValue,setListValue]=useState([])

    let [editIndex,setEditIndex]=useState(null)

    let{listItems}=list

    let handleChange=(e)=>{
       setList({listItems:e.target.value})
    }

    let handleSubmit=(e)=>{
         e.preventDefault()
         if(editIndex!=null)
         {
            listValue[editIndex]=listItems
            setListValue([...listValue])
            setList({listItems:""})
            setEditIndex(null)
         }else{
         setListValue([...listValue,listItems])
         setList({listItems:""})
         }
    }
// TODO:EDIT METHOD
    let handleEdit=(id)=>{
       setEditIndex(id)
       setList({listItems:listValue[id]})

    }
// DELETE METHOD
    let handleDelete=(id)=>{
        let modifiedArray=listValue.filter((ele,index)=>{
            return index!=id
        })
        setListValue(modifiedArray)

    }

  return (
  <body>
    <div id='one'>
        <h1>TO-DO-APP</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" name="listItems" placeholder='Items to be added' value={listItems} onChange={handleChange} id='input_1' required/>
            <input type="submit" value={editIndex!=null?"Update item":"Add item"} id='additems'/>
        </form>
        <table border={2} rules='all'>
    <tbody>
        {
            listValue.map((ele, index) => {
                return (
                    <tr key={index}>
                        <td>{ele}</td>
                        <td>
                            <button onClick={() => handleEdit(index)} id="edit">Edit</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(index)} id="delete">Delete</button>
                        </td>
                    </tr>
                );
            })
        }
    </tbody>
</table>
        <button onClick={()=>setListValue([])} id='clear'>Clear All</button>
    </div>
    </body>
  )
}

export default Todoapp