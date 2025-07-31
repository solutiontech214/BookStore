import React from 'react'
import Home from './components/Home'
import Course from './components/Store'
import { Routes, Route, Navigate } from 'react-router-dom'
import StoreArea from './/components/StoreArea'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
export default function App() {
  const [authUser,setAuthUSer]=useAuth()
  console.log(authUser)
  return (
    
      <div className='dark:bg-black dark:text-white'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={authUser?<StoreArea />:<Navigate to={"/"}/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
      </div>
    
  )
}