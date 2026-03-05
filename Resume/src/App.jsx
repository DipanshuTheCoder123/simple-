

import { Outlet } from 'react-router-dom'
import './App.css'
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import SignInPage from './auth/sign-in/SignInPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   
        let {isSignedIn ,isLoaded} =  useUser();
   
   if(!isSignedIn && isLoaded){
          return <SignInPage/>
   }
   
  return (  
    <>
       <Outlet/>
       <Button>click</Button>
    </>
  )
}

export default App
