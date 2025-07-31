import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const user={
     fullname:data.fullname,
     email:data.email,
     passcode:data.passcode
    }

   await axios.post("http://localhost:3001/user/signup",user).then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successfull")
      }
      localStorage.setItem("user",JSON.stringify(res.data))
    }).catch((err) => {
      if(err.response)
      {
toast.error("Signup Error :"+err.response.data.message )
      }
      
    })
  }

  return (
    <>
      <div className='flex h-screen justify-center items-center bg-gray-200 text-black dark:bg-black '>
        <div className=" border rounded-2xl shadow-2xl  p-8 w-full max-w-md relative dark:bg-gray-100 ">
          
          {/* Close Button */}
          <Link to='/'>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:scale-125 bg-amber-400 text-xl">✕</button>
          </Link>

          {/* Heading */}
          <h3 className="font-bold text-lg mb-5 text-center">Let's Create Your Account</h3>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Name Field */}
            <label className='block mb-1'>Name</label>
            <input
              type="text"
              placeholder='Enter your Name.'
              className='w-full p-2 mb-1 border rounded text-black'
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.fullname && <p className='text-red-600 text-sm mb-4'>{errors.name.message}</p>}

            {/* Email Field */}
            <label className='block mb-1'>Email</label>
            <input
              type="text"
              placeholder='Enter your Email.'
              className='w-full p-2 mb-1 border rounded text-black'
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className='text-red-600 text-sm mb-4'>{errors.email.message}</p>}

            {/* Password Field */}
            <label className='block mb-1'>Passcode</label>
            <input
              type="password"
              placeholder='Enter your password.'
              className='w-full p-2 mb-1 border rounded text-black'
              {...register("passcode", { required: "Password is required" })}
            />
            {errors.passcode && <p className='text-red-600 text-sm mb-6'>{errors.password.message}</p>}

            {/* Submit + Login */}
            <div className='flex justify-between items-center mt-6'>
              <button type="submit" className='bg-amber-400 px-4 py-2 rounded text-black font-semibold hover:scale-105'>
                Create
              </button>

              <div className='text-sm text-black '>
                Already have an account?
                <button
                  type="button"
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                  className='text-blue-400 underline ml-1'
                >
                  Login
                </button>
              </div>
            </div>
          </form>

          {/* Login Modal */}
          <Login />
        </div>
      </div>
    </>
  )
}

export default Signup
