import React from 'react'

const Login = () => {
  return (
    <>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:text-black">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Welcome Back!</h3>
   <div>
    <span>Email</span>
    <input type="email" placeholder='Enter your email.' className='p-2 ml-10 mb-5 mt-3 left-10 border-1 rounded' /> <br />
    <span>Passcode </span>
    <input type="passward" placeholder='Enter your password.' className='p-2 ml-2 left-10 border-1 rounded' />
    <br />
    <button className=' mt-10  bg-amber-400 px-3 py-2 rounded'>Get me In</button>
   </div>
  </div>
</dialog>
    </>
  )
}

export default Login