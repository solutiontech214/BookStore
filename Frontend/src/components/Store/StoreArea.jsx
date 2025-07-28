import React from 'react'
import Navbar from '../Navbar'
import Store from '../Store'
import Footer from '../Footer'

const StoreArea = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen justify-center content-center items-center ml-15 md:ml-0'>
         <Store/>
    </div>
   
    <Footer/>
    </>
  )
}

export default StoreArea