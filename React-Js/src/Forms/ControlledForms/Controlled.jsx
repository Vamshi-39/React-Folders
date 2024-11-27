// import React, { useState } from 'react'

// const Controlled = () => {
//     let [details,setDetails]=useState({
//         name:"",
//         email:"",
//         password:"",
//         skills:"",
//         places:[]
//     })
//     let {name,email,password,skills,places}=details

//     let handleName=(e)=>{
//         setDetails({...details,name:e.target.value})

//     }
//     let handleEmail=(e)=>{
//         setDetails({...details,email:e.target.value})
//     }
//     let handlePassword=(e)=>{
//         setDetails({...details,password:e.target.value})
//     }
//     let handleSkills=(e)=>{
//       setDetails({...details,skills:e.target.value})
//     }
//     let handlePlaces=(e)=>{
//       setDetails({...details,places:[...places,e.target.value]})
//     }
//     let handleSubmit=(e)=>{
//       e.preventDefault()
//       console.log(name)
//       console.log(email)
//       console.log(password)
//       console.log(skills)
//       console.log(places)

//     }

//   return (
//     <form onSubmit={handleSubmit}>
//          <input type="text"placeholder='Enter Your name' value={name}  onChange={handleName} /><br /><br />
//          <input type="text" placeholder='Enter Your email' value={email} onChange={handleEmail}/><br /><br />
//          <input type="text" placeholder='Enter Your password' value={password} onChange={handlePassword}/><br /><br />


//          <label htmlFor="gender" value="gender">GENDER</label>

//          <input type="radio" id='male' value="gender"/>
//          <label htmlFor="male">MALE</label>

//          <input type="radio" id='female' value="gender"/>
//          <label htmlFor="female">FEMALE</label>

//          <input type="radio" id='others'  value="gender"disabled/>
//          <label htmlFor="others">OTHERS</label>
//          <br />
//          <br />

//          <select value={skills} onChange={handleSkills}>
//           <option value="HTML">HTML</option>
//           <option value="CSS">CSS</option>
//           <option value="JS">JS</option>
//           <option value="REACT">REACT</option>
//          </select>
//          <br /><br />
//          <div value={places} onChange={handlePlaces}>
//           <input type="checkbox" name="" id="HYDERABAD" value="HYDERABAD" />
//           <label htmlFor="HYDERABAD">Hyderabad</label>
        
//           <input type="checkbox" name="" id="GOA" value="GOA" />
//           <label htmlFor="GOA">Goa</label>

//           <input type="checkbox" name="" id="BANGLORE" value="BANGLORE" />
//           <label htmlFor="BANGLORE">Banglore</label>

//           <input type="checkbox" name="" id="MUMBAI" value="MUMBAI" />
//           <label htmlFor="MUMBAI">Mumbai</label>
//          </div>
//          <br /><br />
//          <input type="submit" value="Register" />
//     </form>
//   )
// }

// export default Controlled

// import React, { useState } from 'react'

// const Controlled = () => {
//   let [details,setDetails]=useState({
//     name:"",
//     email:"",
//     password:"",
//     gender:"",
//     skills:"",
//     places:[]

//   })
//   let handleDetails=(e)=>{
//     let {name,value}=e.target
//     setDetails({...details,[name]:[...places,value]})
//   }
//   let handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log(name.toString())
//     console.log(email.toString())
//     console.log(password.toString())
//     console.log(gender.toString())
//     console.log(skills.toString())
//     console.log(places)
//   }
//   let {name,email,password,gender,skills,places}=details
//   return (
//     <form onSubmit={handleSubmit}>
//     <input type="text"placeholder='Enter Your name' name="name" onChange={handleDetails} value={name} /><br /><br />
//     <input type="email" placeholder='Enter Your email'name="email"  onChange={handleDetails} value={email}/><br /><br />
//     <input type="password" placeholder='Enter Your password' name="password" onChange={handleDetails} value={password}/><br /><br />

//     <div value={gender} onChange={handleDetails} name="gender">
//     <label htmlFor="gender" name={gender} >GENDER</label>
//      <input type="radio" id='male' name="gender" value="male"/>
//      <label htmlFor="male">MALE</label>
//      <input type="radio" id='female' name="gender" value="female"/>
//      <label htmlFor="female">FEMALE</label>  
//      <input type="radio" id='others'  name="gender" value="others"disabled/>
//      <label htmlFor="others">OTHERS</label>
//     </div>
//     <br /> <br />
//     <select  name="skills" onChange={handleDetails} value={skills}>
//      <option value="HTML">HTML</option>
//      <option value="CSS">CSS</option>
//      <option value="JS">JS</option>
//      <option value="REACT">REACT</option>
//     </select>
//     <br /><br />
//     <div value={places}>
//      <input type="checkbox" name="places" id="HYDERABAD" value="HYDERABAD" onChange={handleDetails} />
//      <label htmlFor="HYDERABAD">Hyderabad</label>
   
//      <input type="checkbox" name="places" id="GOA" value="GOA" onChange={handleDetails} />
//      <label htmlFor="GOA">Goa</label>

//      <input type="checkbox" name="places" id="BANGLORE" value="BANGLORE" onChange={handleDetails}/>
//      <label htmlFor="BANGLORE">Banglore</label>

//      <input type="checkbox" name="places" id="MUMBAI" value="MUMBAI"onChange={handleDetails} />
//      <label htmlFor="MUMBAI">Mumbai</label>
//     </div>
//     <br /><br />
//     <input type="submit" value="Register" />
// </form>
//   )
// }

// export default Controlled

// !USING FORMIK
import { useFormik } from 'formik'
import { number } from 'prop-types'
import React from 'react'

const Controlled = () => {
  let formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      tel:"",
      gender:"",
      skills:"",
      places:[]
    },
    onSubmit:(Vamshi)=>{
      console.log(Vamshi)
    }
    
  })
  let {name,email,password,tel,gender,skills,places}=formik.values
  return (
    <form onSubmit={formik.handleSubmit}>
        <input type="text"placeholder='Enter Your name' name="name" value={name}  onChange={formik.handleChange} /><br /><br />
        <input type="email" placeholder='Enter Your email'name="email" value={email} onChange={formik.handleChange} /><br /><br />
        <input type="password" placeholder='Enter Your password' name="password"  value={password} onChange={formik.handleChange} /><br /><br />
        <input type="tel" placeholder='Enter Your mobileNumber' name="tel"  value={tel} onChange={formik.handleChange} />
        <br /><br />
    <div name="gender" value={gender} onChange={formik.handleChange}>
          <label htmlFor="gender" name={gender} >GENDER</label>
          <input type="radio" id='male' name="gender" value="male"/>
          <label htmlFor="male">MALE</label>
          <input type="radio" id='female' name="gender" value="female"/>
          <label htmlFor="female">FEMALE</label>  
          <input type="radio" id='others'  name="gender" value="others"disabled/>
          <label htmlFor="others">OTHERS</label>
    </div> <br /> <br />
    <select  name="skills"  value={skills} onChange={formik.handleChange}>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
          <option value="REACT">REACT</option>
    </select><br /><br />
    <div value={places} onChange={formik.handleChange}>
         <input type="checkbox" name="places" id="HYDERABAD" value="HYDERABAD"  />
         <label htmlFor="HYDERABAD">Hyderabad</label>
       
         <input type="checkbox" name="places" id="GOA" value="GOA" />
         <label htmlFor="GOA">Goa</label>
    
         <input type="checkbox" name="places" id="BANGLORE" value="BANGLORE" />
         <label htmlFor="BANGLORE">Banglore</label>
    
         <input type="checkbox" name="places" id="MUMBAI" value="MUMBAI" />
         <label htmlFor="MUMBAI">Mumbai</label>
    </div> <br /><br />  
         <input type="submit" value="Register" />
</form>
  )
}

export default Controlled