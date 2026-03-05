import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, BrowserRouter as Router, RouterProvider } from 'react-router-dom'
import Card from './card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  
    const rout =      createBrowserRouter([
          {
           path:`/card/:id`,
           element:<Card/>
          },{
              path:"/",
          element:<App/>
          }
        
        ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rout}></RouterProvider>
  </StrictMode>,
)
