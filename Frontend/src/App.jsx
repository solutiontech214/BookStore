import React from 'react'
import Home from './components/Home'
import Course from './components/Store'
import { Routes, Route } from 'react-router-dom'
import StoreArea from './/components/StoreArea'
import Signup from './components/Signup'
export default function App() {
  return (
    
      <div className='dark:bg-black dark:text-white'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StoreArea />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
    
  )
}