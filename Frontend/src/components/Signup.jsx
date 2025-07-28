import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  return (
    <>
    <div className='flex h-screen justify-center content-center items-center bg-gray-200 dark:bg-black'>
      <div  className="">
  <div className="  dark:text-white border-1  rounded-2xl shadow-2xl dark:bg-gray-700 p-5">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
     <Link to='/' > <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 p-5 m-5 hover:scale-125  bg-amber-400 text-xl" >✕</button></Link>
    </form>
    <h3 className="font-bold text-lg mb-3">Let's Create Ur Account</h3>
   <div>
    <span>Name</span> <br />
    <input type="text" placeholder='Enter your Name.' className='p-2 ml-2 mb-5 mt-3 left-10 border-1 rounded' /> <br />
    <span>Passcode </span> <br />
    <input type="passward" placeholder='Enter your password.' className='p-2 ml-2  mt-3 left-10 border-1 rounded' />
    <br />
    <div className='grid grid-cols-2 felx justify-center items-center content-center'>
          <button className=' mt-10  bg-amber-400 px-3 py-2 rounded mr-2'>Create</button>
          <h2 className='mt-8 text-sm'>Already Have Account? <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='text-blue-400 underline cursor-pointer'>Login</button>  <Login /></h2>
        

    </div>
   </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup