import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
// import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contuct/Contact.jsx';
import Users from './Components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      }, 
      {
        path:'Contact',
        element:<Contact></Contact>
      }, 
      {
        path:'Users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      }
      
    ]
  }
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
