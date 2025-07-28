import React from 'react'
import { Link } from 'react-router-dom'
import {useForm } from 'react-hook-form'
const Login = () => {
 const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:text-black">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button onClick={()=>document.getElementById("my_modal_3").hidePopover()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Welcome Back!</h3>
   <div>
    <span>Email</span> <br />
    <input type="email" placeholder='Enter your email.' name="email" className='p-2 ml-2 mb-5 mt-3 left-10 border-1 rounded'
    {...register("email", { required: true })}
    /> 
    {errors.email && <span className='ml-2 text-red-600'>This field is required</span>}
    <br />
    <span>Passcode </span> <br />
    <input type="password" placeholder='Enter your password.' 
    name="password "className='p-2 ml-2  mt-3 left-10 border-1 rounded' 
    {...register("password", { required: true })}
    />
    {errors.password && <span className='ml-2 text-red-600'>This field is required</span>}
    <br />
    <div className='grid grid-cols-2 felx justify-center items-center content-center'>
          <button type='submit' className=' mt-10  bg-amber-400 px-3 py-2 rounded mr-2'>Get Me In</button>
          <h2 className='mt-8 text-sm'>Don't Have Account? <Link to={'/signup'} className='text-blue-400 underline'>Create Account</Link></h2>

    </div>
   </div>
   </form>
  </div>
</dialog>
    </>
  )
}

export default Login