import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiDomain } from '../config/DomainUrls';
import toast from 'react-hot-toast';

const Home = () => {

  const nav = useNavigate();
  const [userToken,setUserToken] = useState("")


  const [userVerifyLoading,setUserVerifyLoading] = useState(false)

  const checkAuthorize = async (token) =>{
    setUserVerifyLoading(true)
    try {
     const verifyLoading =  toast.loading("Wait Loading ...",{
        icon:"🔃",
        id:"toastUserVerify"
      })
      const reqAndRes = await (await fetch(`${ApiDomain}appgh/auth/student/`,{
        method:"GET",
        headers:{"content-type":"application/json",studentToken:token}
      })).json();

      console.log(reqAndRes)

      
      setUserVerifyLoading(false)
      toast.remove("toastUserVerify")
      
      if(reqAndRes.success){
        toast.success("User Verified", {icon:"🎉"})
      }
      else{
        toast.error("Please Login in again or try again later",{icon:"😒"})
        nav("/login")
      }


    } catch (error) {
      toast.error("some error occured please login again",{
        icon:"❌"
      })
      nav("/login")
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("usertoken")){
      
      setUserToken(localStorage.getItem("usertoken"))
      // api for checking if this token is valid or not and check if this user are eists or not 
      checkAuthorize(localStorage.getItem("usertoken"))

    }
    else{
      nav("/login")
    }
  }, [])

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container">
        hello world 
      </div>
    </main>
  )
}

export default Home