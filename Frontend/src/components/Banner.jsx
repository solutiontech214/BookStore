import React from 'react'

import banner from '../../src/banner.png'
const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-5   flex flex-col md:flex-row'>
         {/* Left part */}
        <div className=' order-2 p-0 md:order-1 w-full md:py-15 md:w-1/2 '>
        <div className='space-y-5 mt-20 '>
        <h1 className=' text-xl md:text-3xl font-bold'>Dive into endless stories and discover your next great read—
        All your favorite books, just a <span className='text-orange-300'>click away!</span></h1>
         <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae doloremque, dignissimos consequuntur praesentium dolore.</p>

         <label className="input validator w-full ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Enter your Email here.." required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
        </div>


     <button className="btn btn-warning">Send</button>
        </div>


        {/* Right part */}
        <div className='order-1 md:order-2 w-full  h-60 md:py-15 md:h-5 md:w-1/2 content-center justify-center items-center '>
        <img src={banner} className='h-95  py-13 w-full md:ml-20 md:w-full md:h-140 md:mt-0' alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner