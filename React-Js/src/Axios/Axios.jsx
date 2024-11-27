import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
    let [users,setUsers]=useState(null)
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}= await axios.get("https://dummyjson.com/users")
            setUsers(data.users)
           }
           fetchData()
    },[])
    
  return (
    <>
    <table border="1" rules='all' width="100%">
        <tr>
            <th style={{border:"2px solid black",background:"black",color:"white",fontWeight:'800'}}>SL.NO</th>
            <th style={{border:"2px solid black",background:"black",color:"white",fontWeight:'800'}}>FIRST NAME</th>
            <th style={{border:"2px solid black",background:"black",color:"white",fontWeight:'800'}}>LAST NAME</th>
            <th style={{border:"2px solid black",background:"black",color:"white",fontWeight:'800'}}>AGE</th>
            <th style={{border:"2px solid black",background:"black",color:"white",fontWeight:'800'}}>PHONE</th>
            <th style={{border:"2px solid black",background:"black",color:"white",fontWeight:'800'}}>IMAGE</th>
        </tr>
        {users==null?"LOADING":users.map((ele)=>{
            return(
                <tr key={ele.id}>
                    <td style={{textAlign:'center',border:"2px solid black"}}>{ele.id}</td>
                    <td style={{textAlign:'center',border:"2px solid black"}}>{ele.firstName}</td>
                    <td style={{textAlign:'center',border:"2px solid black"}}>{ele.lastName}</td>
                    <td style={{textAlign:'center',border:"2px solid black"}}>{ele.age}</td>
                    <td style={{textAlign:'center',border:"2px solid black"}}>{ele.phone}</td>
                    <td style={{textAlign:'center',border:"2px solid black"}}><img src={ele.image}/></td>
                </tr>
            )
        })}

    </table>
    </>
  )
}

export default Axios