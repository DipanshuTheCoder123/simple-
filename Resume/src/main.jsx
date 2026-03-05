import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Dasbord from './Dasbord/Dasbord.jsx'
import SignInPage from './auth/sign-in/SignInPage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Home from './Home/Home.jsx'
import CreateTrip from './Componants/create-trip/CreateTrip'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

 let router   = createBrowserRouter([

  {
    element: <App/>,
    children:[
   {
      path:"/dasbord",
      element:<Dasbord/>
    }
    ]
  },
   {
        path:"/",
        element:<Home/>
    },
    {
     path:"/auth/sign-in",
      element:<SignInPage/>
  },
  {
       path:"/create-trip",
       element: <CreateTrip/>
  }
])
createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider  router={router} />
    </ClerkProvider>
  </StrictMode>,
)
