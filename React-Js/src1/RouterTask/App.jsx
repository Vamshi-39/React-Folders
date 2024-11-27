// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './Task/Home'
// import Service from './Task/Service'
// let vamshi=createBrowserRouter([
//     {
//         path:"/",
//         element:<Home/>
//     },
//     {
//         path:"/service",
//         element:<Service/>
//     }
// ])

// const App = () => {
//   return (
//     <div>
//         <RouterProvider router={vamshi}/>
//     </div>
//   )
// }

// export default App

// !TO DO LIST
import React from 'react'
import Todolist from './ToDoList/Todolist'

const App = () => {
  return (
    <div>
      <Todolist/>
    </div>
  )
}

export default App