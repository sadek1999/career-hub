import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/root/Root.jsx';
import Home from './component/Home/Home';
import Jobs from './component/Jobs/Jobs';
import Blogs from './component/Blog/Blogs';
import Statistics from './component/Statistics/Statistics';
import Applied from './component/Applied/Applied';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
       path:'/blogs',
       element:<Blogs></Blogs>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied',
        element:<Applied></Applied>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
