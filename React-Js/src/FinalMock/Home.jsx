import React, {useState } from 'react'
const Home = () => {
    let [name,setName]=useState("")
    let [price,setPrice]=useState("")
    let [quantity,setQuantity]=useState("")

    let [cart,setCart]=useState([])

    let handleSubmit=()=>{
        const pprice=Number(price)
        const pquantity=Number(quantity)
        const total=pprice*pquantity
       setCart([...cart,{name,price:pprice,quantity:pquantity,total}])
    }
    const totalCartAmount=cart.reduce((acc,item)=>acc+=item.total,0)   
  return (<>
  <div>
  <h1>PRODUCT TASK</h1>

      <label>Product Name:</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  required/>
      
      <label>Product Price:</label>
      <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
      
      <label >Product Quantity:</label>
      <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required/>
      
      <input type="submit" value="Buy" onClick={handleSubmit} />
<ul>
    {cart.map((item, index) => (
      <li key={index}>
        <strong>{item.name}</strong> - Price: {item.price} x Quantity: {item.quantity}  Total:{item.total}
      </li>
    ))}
  </ul>

       <h3> Total Amount:{totalCartAmount}</h3>
  </div>
  </> 
  )
}

export default Home