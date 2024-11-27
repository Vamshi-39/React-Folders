// !DOM WAY
// import React from 'react'
// const Uncontrolled = () => {
// let handleSubmit=(e)=>{
//     e.preventDefault();
//     let name=document.querySelector("[type=text]").value
//     let email=document.querySelector("[type=email]").value
//     let password=document.querySelector("[type=password]").value
//     console.log(name)
//     console.log(email)
//     console.log(password)
// }
//   return (
//     <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='Enter your Name' /><br /><br />
//         <input type="email"  placeholder='Enter your Email'/><br /><br />
//         <input type="password" placeholder='Enter your Password'/><br /><br />
//         <input type="submit" value="Sign In" />
//     </form>
//   )
// }

// export default Uncontrolled

// !useRef()
import React, { useRef } from 'react'
const Uncontrolled = () => {
    let nameRef= useRef()
    let emailRef= useRef()
    let passwordRef= useRef()
    let handleSubmit=(v)=>{
        v.preventDefault();
        // @Accessing values
        // console.log(nameRef.current.value)
        // console.log(emailRef.current.value)
        // console.log(passwordRef.current.value)
        // @Focusing Input Field
        nameRef.current.focus()
        // @Adding styles
        emailRef.current.style.background="white"
        nameRef.current.style.background="orange"
        passwordRef.current.style.background="green"
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter your Name' ref={nameRef} /><br /><br />
    <input type="email"  placeholder='Enter your Email' ref={emailRef}/><br /><br />
    <input type="password" placeholder='Enter your Password' ref={passwordRef}/><br /><br />
    <input type="submit" value="Sign In" />
</form>
  )
}

export default Uncontrolled