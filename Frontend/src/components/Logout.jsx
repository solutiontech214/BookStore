import React  from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
function Logout(){
  const handleLogout=()=>{
    try{
      setAuthUSer({
        ...authUser,
        user:null
      })
      localStorage.removeItem('user')
      toast.success("Logout Successfull..")
      setTimeout(()=>{
 window.location.reload()
      },2000)
     
    }catch(error){
      toast.error("Error :"+error)
    }
  }
  const [authUser,setAuthUSer]=useAuth()
  return(
    <div>
    <button className="bg-red-400 px-3 py-2 rounded  cursor-pointer text-white" onClick={handleLogout}>
      Logout
    </button>
    </div>
  )
}
export default Logout