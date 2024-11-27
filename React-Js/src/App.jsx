// import React from "react"
// import JavaScriptXML from "./JavaScriptXML/JavaScriptXML"
// class App extends React.Component{
//     render(){
//         return <h1>I AM CLASS BASED COMPONENT </h1>
//     }
// }
// export default App


//  let Function =()=>
//  {
//  return  <>
//     {/* <JavaScriptXML/> */}
//  <h1>Heading-1</h1>
//   <h1>Heading-2</h1>
//   <h1>Heading-3</h1>
//  </>
//  }
//  export default Function

// ! PROPS 30-07-2024
// import ParentProp from "./Props/ParentProp"
// let App=()=>{
//     return <ParentProp/>
// }
// export default App

// !02-08-2024
// !PROP DRILLING
// import Parent from "./Props/PropDrilling/Parent"
// let App=()=>{
//     return <Parent/>
// }
// export default App

// !06-08-2024
// !useContext()
// import React from 'react'
// import ParentContext from './useContext/ParentContext'
// import {Fun, Name, Obj, Place} from './useContext/GlobalContext'
// import { Age } from './useContext/GlobalContext'

// let sayMorning=()=>{
//     console.log("GOOD MORNING!")
// }
// let data={
//     name:"Rajamouli",
//     age:"49",
//     place:"Hyderabad",
//     skills:["Writter","Director","Actor"],
//     fun:()=>{
//         console.log("Hi Everyone!")
//     }

// }
//  const App=()=>{
//     return <Name.Provider value="Vamshi">
//         <Age.Provider value={21}>
//         <Place.Provider value="Kalwakurthy">
//          <Fun.Provider value={sayMorning}>
//          <Obj.Provider value={data}>
//          <ParentContext/>
//          </Obj.Provider>
//          </Fun.Provider>
//         </Place.Provider>
//         </Age.Provider>
//     </Name.Provider>
//  }
//  export default App

// !08-08-2024
// !ADDING CSS TO JSX FILES
// import React from 'react'
// import Inline from './Stylings/Inline'
// import GlobalCss from './Stylings/GlobalCss'
// import './Global.css'//
// import Layout from './Stylings/ModuleCss/Layout'
// const App = () => {
//   return (
//     <>
//    {/* <Inline/>
//    <GlobalCss/> */}
//    <Layout/>
//     </>
//   )
// }

// export default App

// !09-08-2024
// !MODULECSS TASK
// import React from 'react'
// import LayoutTask from './Stylings/ModuleCssTask/LayoutTask'

// const App = () => {
//   return (
//     <>
//     <LayoutTask/>
//     </>
//   )
// }

// export default App

// !12-08-2024
// !FORMS(UncontrolledForms)
// import React from 'react'
// import Uncontrolled from './Forms/UncontrolledForms/Uncontrolled'

// const App = () => {
//   return (
//     <>
//     <Uncontrolled/>
//     </>
//   )
// }

// export default App

// !13-08-2024
// !FORMS(ControlledForms)
// import React from 'react'
// import Controlled from './Forms/ControlledForms/Controlled'
// const App = () => {
//   return (
//     <>
//     <Controlled/>
//     </>
//   )
// }

// export default App

// !20-08-2024
// !FORWARD REF METHOD
// import React from 'react'
// import FRparent from './ForwardRef/FRparent'

// const App = () => {
//   return (
//     <div>
//       <FRparent/>
//     </div>
//   )
// }

// export default App

// !21-08-2024
// !HIGHER ORDER COMPONENTS
// import React from 'react'
// import HParent from './HigherOrderComponents/HParent'

// const App = () => {
//   return (
//     <div>
//       <HParent/>
//     </div>
//   )
// }

// export default App

// !22-08-2024
// !LIFE CYCLE PHASES
// import React from 'react'
// import Lifecycle from './LifeCycleMethods/Lifecycle'

// const App = () => {
//   return (
//     <div>
//         <Lifecycle/>
//     </div>
//   )
// }

// export default App

// !23-08-2024
// !USEEFFECT()
// import React from 'react'
// import Effect from './useEffect/Effect'

// const App = () => {
//   return (
//     <>
//     <Effect/>
//     </>
//   )
// }
// export default App

// !26-08-2024
// !Axios
// import React from 'react'
// import Axios from './Axios/Axios'

// const App = () => {
//   return (
//     <>
//     <Axios/>
//     </>
//   )
// }

// export default App

// !27-08-2024
// !PURE COMPONENTS
// import React from 'react'
// import Parent from './PureComponents/Parent'

// const App = () => {
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// export default App

// !MEMO COMPONENTS
// import React from 'react'
// import ParentComponent from './Memo/ParentComponent'

// const App = () => {
//   return (
//     <div>
//       <ParentComponent/>
//     </div>
//   )
// }

// export default App

// !PORTALS
// import React from 'react'
// import Portal from './Portals/Portal'

// const App = () => {
//   return (
//     <div>
//       <Portal/>
//     </div>
//   )
// }

// export default App

// !PORTALS TASK
// import React, { useState } from 'react'
// import PortalsTask from './Portals/PortalTask'


// const App = () => {
//   let [state,setState]=useState(false)
//   let handleState=()=>{
//     setState(!state)
//   }
//   return (
//     <>
//       <button onClick={handleState}>SHOW PORTAL</button>
//       {state?<PortalsTask fun={handleState}/>:null}
//     </>
//   )
// }

// export default App

// !29-08-2024
// !useMemo()
// import React from 'react'
// import UseMemo from './useMemo/UseMemo'

// const App = () => {
//   return (
//     <div>
//       <UseMemo/>
//     </div>
//   )
// }

// export default App

// !30-08-2024
// !useCallback
// import React from 'react'
// import ParentCallback from './useCallback/ParentCallback'

// const App = () => {
//   return (
//     <div>
//       <ParentCallback/>
//     </div>
//   )
// }

// export default App
// !03-09-2024
// !ROUTER V5
// import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./Router/Home"
// import About from "./Router/About"
// import Contact from "./Router/Contact"
// import Services from "./Router/Services"
// import PageNotFound from "./Router/PageNotFound"
// import "./Router.css"
// import Profile from "./Router/Profile"
// import Message from "./Router/Message"
// import MainAbout from "./Router/MainAbout"

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<MainAbout/>}>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/about/profile" element={<Profile/>}/>
//         <Route path="/about/message" element={<Message/>}/>
//       </Route>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/services" element={<Services/>}/>
//       <Route path="*" element={<PageNotFound/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }
// export default App

// !04-09-2024
// !ROUTER V6
// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from "./Router/Home"
// import About from "./Router/About"
// import Contact from "./Router/Contact"
// import Services from "./Router/Services"
// import PageNotFound from "./Router/PageNotFound"
// import "./Router.css"
// import Profile from "./Router/Profile"
// import Message from "./Router/Message"
// import MainAbout from "./Router/MainAbout"

// const App = () => {
//   let vamshi=createBrowserRouter([
//     {
//       path:"/",
//      element:<Home/>
//     },
//     {
//       path:"/about",
//       element:<MainAbout/>,
//       children:[{
//         path:"/about/profile",
//         element:<Profile/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/about/message",
//         element:<Message/>
//       }
//     ]
//     },
//     {
//       path:"/contact",
//       element:<Contact/>
//     },
//     {
//       path:"/services",
//       element:<Services/>
//     },
//     {
//       path:"*",
//       element:<PageNotFound/>
//     }
//   ])
//   return (
//     <>
//     <RouterProvider router={vamshi}/>
//     </>
//   )
// }

// export default App

// !05-09-2024
// !ERROR BOUNDRY PHASE
// import React from 'react'
// import Welcome from './ErrorBoundary/Welcome'
// import Fallback from './ErrorBoundary/Fallback'

// const App = () => {
//   return (
//     <>
//     <Fallback>
//       <Welcome name="Vamshi"/>
//     </Fallback>
//     <Fallback>
//       <Welcome name="Rajamouli"/>
//     </Fallback>
//     <Fallback>
//       <Welcome name="Ram Charan"/>
//     </Fallback>
//     </>
//   )
// }

// export default App
// !FINAL MOCK
// !04-10-2024
// import React from 'react'
// import Home from "./FinalMock/Home"
// import "./Mock.css"

// const App = () => {
//   return (
//     <div>
//         <Home/>
//     </div>
//   )
// }

// export default App







// !HEADER

// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Men from './Header/Men'
// import Women from './Header/Women'
// import Kids from './Header/Kids'
// import Beauty from './Header/Beauty'
// import Watches from './Header/Watches'
// import Gifts from './Header/Gifts'
// import Brands from './Header/Brands'
// import Homestop from './Header/Homestop'
// import Header from './Header/Header'

// const App = () => {
    //   let routes=createBrowserRouter([
        
    //         {
        //           path:"/men",
        //           element:<Men/>
        //         },
        //         {
            //           path:"/women",
            //           element:<Women/>
            //         },
            //         {
                //           path:"/kids",
                //           element:<Kids/>
                //         },
                //         {
//           path:"/beauty",
//           element:<Beauty/>
//         },
//         {
    //           path:"/watches",
    //           element:<Watches/>
    //         },
    //         {
        //           path:"/gifts",
        //           element:<Gifts/>
        //         },
        //         {
//           path:"/brands",
//           element:<Brands/>
//         },
//         {
    //           path:"/homestop",
    //           element:<Homestop/>
    //         }
    //   ])
    //   return (
        //     <div>
        //      <RouterProvider router={routes}/>
        //     </div>
        //   )
        // }
        
        // export default App
        
        
        
        // *TODO LIST


// import React from 'react'
// import Todoapp from './ToDoApp/Todoapp'
// import "./Todoapp.css"

// const App = () => {
//   return (
//     <div>
//       <Todoapp/>
//     </div>
//   )
// }

// export default App





















