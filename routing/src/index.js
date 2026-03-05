import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ReadMore from './Pages/ReadMore';

 
 let allrount =  createBrowserRouter(
     [
        {
          path:"/",
          element: <Home />
        },{
          path:"contact-us",
          element:<Contact/>
        },
        {path:"about",
          element:<About/>
        },
        {path:"/ReadMore/:id",
          element:<ReadMore/>
        }

     ]
 )
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider  router={allrount}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
