import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import SignIn from './Component/SignIn.jsx';
import SignUp from './Component/SignUp.jsx';
import Home from './Component/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Component/Users.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[

      {
        path: "/",
        element: <App></App>,
        loader:()=>fetch(`http://localhost:5000/coffee`)
      },
      {
        path:'addcoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'updatecoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:'signin',
        element:<SignIn></SignIn>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'users',
        element:<Users></Users>,
        loader:()=>fetch(`http://localhost:5000/users`)
      }


    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
