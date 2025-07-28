import React from 'react'
import Home from '../src/home/Home'
import Course from './components/Store'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import StoreArea from './components/Store/StoreArea'

export default function App() {
  return (
    
      <div className='dark:bg-black dark:text-white'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StoreArea />} />
      </Routes>
      </div>
    
  )
}