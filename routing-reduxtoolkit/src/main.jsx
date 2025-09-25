import React from 'react';import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Register } from './pages/Register.jsx';
import { Login } from './pages/Login.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Products } from './components/Products.jsx';
import { ConatctUs } from './pages/ConatctUs.jsx';
import { Pagenotfound } from './pages/Pagenotfound.jsx';


const myRoutes = createBrowserRouter([
  {path:"/", element:<App/>,
    children :[
    {path:'', element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'login', element:<Login/>},
    {path:'about', element:<About/>},
    {path:'products', element:<Products/>},
    {path:'contact', element:<ConatctUs/>},
    ]
  } ,
  {path:'/register', element:<Register/>},
  {path:'*', element:<Pagenotfound/>},
])
// / means root (http://localhost:2000)
    // {index:true, element:<Home/>},

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRoutes}/>,
)
