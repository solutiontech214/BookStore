import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
   const user={
    
     email:data.email,
     passcode:data.passcode
    }

    try {
      const res = await axios.post("http://localhost:3001/user/login", user);
      console.log(res.data);
      if (res.data) {
        toast.success("Login Successful");
        localStorage.setItem("user", JSON.stringify(res.data));
        document.getElementById("my_modal_3").close(); // close the modal after login
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error("Login Error: " + err.response.data.message);
      } else {
        toast.error("Login Error: Something went wrong");
      }
    }
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:text-black">
          {/* Close Button */}
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-amber-400 px-4 py-2 rounded text-black font-semibold hover:scale-105"
          >
            ✕
          </button>

          {/* Heading */}
          <h3 className="font-bold text-lg mb-4">Welcome Back!</h3>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email."
              className="w-full p-2 mb-2 border rounded"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-600 text-sm mb-3">{errors.email.message}</p>}

            <label>Passcode</label>
            <input
              type="password"
              placeholder="Enter your password."
              className="w-full p-2 mb-2 border rounded"
              {...register("passcode", { required: "Passcode is required" })}
            />
            {errors.passcode && <p className="text-red-600 text-sm mb-3">{errors.passcode.message}</p>}

            {/* Submit & Switch to Signup */}
            <div className="flex justify-between items-center mt-6">
              <button type="submit" className="bg-amber-400 px-4 py-2 rounded hover:scale-105">
                Get Me In
              </button>

              <div className="text-sm">
                Don't have an account?
                <Link to="/signup" className="text-blue-400 underline ml-1">
                  Create Account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Login
