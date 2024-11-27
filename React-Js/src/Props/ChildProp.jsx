import { Children } from "react"
// let ChildProp=({whatever,age,height,obj:{place}})=>{
    //     return <h1>CHILD PROP-{whatever}-{age}-{height}-{place}</h1>
// }
// export default ChildProp
// let ChildProp=(props)=>{
    //     let {fun,skills}=props
//         return <div>
//         <button onClick={fun}>Button</button>
//         <h1>My Skills are:{skills[0]}</h1>
//         </div>
//     }
//     export default ChildProp
    // !PROP CHILDREN
//     let ChildProp=(props)=>
//         { 
//       let {name,age,children}=props
//       return <>
//       <h1>My Name is:{name}</h1>
//       <h1>My age is:{age}</h1>
//       {children}
//        </>
// }
// export default ChildProp
// !DEFAULT PROPS
// let ChildProp=({name,age,place,salary})=>
// {
//     return <div>
//         <h1>My name is:{name}</h1>
//         <h1>My age is:{age}</h1>
//         <h1>I am from:{place}</h1>
//         <h1>My salary is:{salary}</h1>
//     </div>
// }
// export default ChildProp

// ChildProp.defaultProps={
//     place:"Kalwakurthy",
//     salary:10000
// }

// !PROP-TYPES
// import Vamshi from "prop-types"
// let ChildProp=({name,age})=>{
// return <div>
//     <h1>My Name is:{name}</h1>
//     <h1>My age is:{age}</h1>
// </div>
// }
// export default ChildProp

// ChildProp.propTypes={
//     name:Vamshi.string,
//     age:Vamshi.number
// }