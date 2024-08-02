import { useState } from 'react'
import {ApiDomain} from "./../config/DomainUrls"
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  
  const nav = useNavigate();
  const [inputs, setInputs] = useState({
    studentId: "",
    studentPassword: ""
  })

  const [stdIdErrors, setStdIdErrs] = useState({
    error: false, message: "Id is required"
  })

  const [stdPassErrors, setStdPassErrors] = useState({
    error: false, message: "Password is required"
  })


  const checkValidate = () => {
    if (inputs.studentId.length < 3 || inputs.studentId.length > 10) {
      setStdIdErrs({ error: true, message: "Student ID is not valid" })
      return false
    }
    else{
      setStdIdErrs({ error: false, message: "" })
    }

    if (inputs.studentPassword.length < 4) {
      setStdPassErrors({ error: true, message: "Student Password is not valid" })
      return false
    }
    else{
      setStdPassErrors({ error: false, message: "" })
    }
    return true
  }


  const changeLoginInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }



  // states for send request and recieve response 
  const [loading,setLoading] = useState(false)

  const [isResErr,setIsResErr] = useState(false);
  const [resErrMsg,setResErrMsg] = useState("")

  const [recieveData,setRecieveData] = useState({})



  const submitForm = async (e) => {
    e.preventDefault()
    const checkingValidate = checkValidate();



    if (checkingValidate) {
      // console.log("data are valid")
      // console.log(inputs)
    
      try {
        setLoading(true)

        // calling to the api 
  
        const reqAndRes = await (await fetch(`${ApiDomain}appgh/auth/student/signin`,{
          method:"POST",
          headers:{'content-type':'application/json'},
          body: JSON.stringify({stdId:inputs.studentId, stdPassword: inputs.studentPassword})
        })).json();
  
        setLoading(false)
  
        if(reqAndRes.success){
          setIsResErr(false)
          setRecieveData(reqAndRes.data)
          // console.log(reqAndRes.data.token)
          localStorage.setItem("usertoken", reqAndRes.data.token)
          toast.success("Logged sucessfully...",{
            icon:"🎉"
          })
          setInputs({studentId:"", studentPassword:""})
          nav("/")
        }
        else{
          setIsResErr(true)
          setResErrMsg(reqAndRes.message)
          toast.error(reqAndRes.message,{
            icon:"😒"
          })
        }
      } catch (error) {
        setLoading(false)
        setIsResErr(true)
          setResErrMsg("Some error occured")
          toast.error("Some error occured",{
            icon:"😒"
          })
      }


    }
    else{
      console.log("data are not valid")
      console.log(inputs)
    }
  }





  return (
    <main className='min-h-screen bg-gray-100'>
      <Toaster position='top-right' reverseOrder={false} />
      <div className="container mx-auto flex items-center justify-center">

        <div className="md:w-[70%] mt-10 w-[90%] rounded-md shadow-md shadow-gray-300 mx-auto bg-white">

          <div className="head w-full bg-gray-700 px-3 py-2 rounded-md">
            <h1 className="text-4xl text-white font-bold">Login </h1>
            <p className="text-gray-200 text-lg">Login to acces your account </p>

            <h3 className="text-xl text-white mt-3 font-bold">Instuctions</h3>
            <ul className='px-5 list-disc'>
              <li className='list-item text-white'>You must have an account here</li>
              <li className='list-item text-white'>Enter your global roll number</li>
              <li className='list-item text-white'>Enter your password</li>
            </ul>
          </div>


          <form action='#' className='mt-3' onSubmit={submitForm} method='post'>
            <input disabled={loading}  onChange={changeLoginInputs} className='  disabled:bg-gray-200  md:w-[70%] w-[95%] text-lg  block mx-auto border border-gray-700 p-2 m-2 rounded-md outline-none text-gray-700' type="text" name="studentId" placeholder='Student Id' required />
            {stdIdErrors.error ? <div className="text-red-800 w-[95%] text-xs mt-[-5px] md:w-[70%] mx-auto">{stdIdErrors.message}</div> : ""}
            <input  disabled={loading} onChange={changeLoginInputs} className=  ' disabled:bg-gray-200 md:w-[70%] w-[95%] text-lg  block mx-auto border border-gray-700 p-2 m-2 rounded-md outline-none text-gray-700' type="password" name='studentPassword' placeholder='Password' required />
            {stdPassErrors.error ? <div className="text-red-800 w-[95%] text-xs mt-[-5px] md:w-[70%] mx-auto">{stdPassErrors.message}</div> : ""}
            <button disabled={inputs.studentId.length<1 || loading}  type="submit" className='disabled:bg-gray-600 hover:bg-gray-100 hover:text-gray-950 transition-all duration-300 text-lg text-center flex items-center justify-center gap-2 w-auto p-2 border border-gray-700 mt-4 rounded-md outline-none bg-gray-700 text-white block mx-auto'> {
              loading? <span className="mx-auto w-[20px] h-[20px] border border-2 transition-all duration-300 animate-spin border-white rounded-full flex items-center justify-center text-white bg-black text-sm">W</span>: ""} Login</button>
          </form>

          <div className="head w-full bg-gray-700 px-3 py-2 rounded-md mt-5">
            <div className="links w-full text-center flex items-start justify-center gap-2 flex-wrap ">
              {/* <p className='text-white'>Not have an account <a className='text-blue-300' href="#">Signup</a> </p> */}
              <p className='text-white'>Forget password <a className='text-blue-300' href="#">Click here </a> </p>
            </div>
          </div>

        </div>


      </div>
    </main>
  );
}

export default Login