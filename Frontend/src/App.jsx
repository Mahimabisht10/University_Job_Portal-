
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/ui/shared/Navbar'
import Signup from './components/ui/auth/Signup'
import Login from './components/ui/auth/Login'
import Home from './components/ui/Home'

const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  

])
function App() {


  return (
    <>

<RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
