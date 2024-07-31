import { useState } from 'react'
// import { FaAllergies, FaLock, FaUser } from 'react-icons/fa';

const Login = () => {

  // const [studentId,setStudentId] = useState("")
  // const [studentPass,setStudentPass] = useState("")

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

  const submitForm = async (e) => {
    e.preventDefault()
    const checkingValidate = checkValidate();

    if (checkingValidate) {
      console.log("data are valid")
      console.log(inputs)
    }
    else{
      console.log("data are not valid")
      console.log(inputs)
    }
  }





  return (
    <main className='min-h-screen bg-gray-100'>
      <div className="container mx-auto flex items-center justify-center">

        <div className="md:w-[70%] mt-10 w-[90%] rounded-md shadow-md shadow-gray-300 mx-auto">

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
            <input onChange={changeLoginInputs} className='md:w-[70%] w-full text-lg  block mx-auto border border-gray-700 p-2 m-2 rounded-md outline-none text-gray-700' type="text" name="studentId" placeholder='Student Id' required />
            {stdIdErrors.error ? <div className="text-red-800 w-full text-xs mt-[-5px] md:w-[70%] mx-auto">{stdIdErrors.message}</div> : ""}
            <input onChange={changeLoginInputs} className='md:w-[70%] w-full text-lg  block mx-auto border border-gray-700 p-2 m-2 rounded-md outline-none text-gray-700' type="password" name='studentPassword' placeholder='Password' required />
            {stdPassErrors.error ? <div className="text-red-800 w-full text-xs mt-[-5px] md:w-[70%] mx-auto">{stdPassErrors.message}</div> : ""}
            <button disabled={inputs.studentId.length<1}  type="submit" className='disabled:bg-gray-600 hover:bg-gray-100 hover:text-gray-950 transition-all duration-300 text-lg text-center w-auto p-2 border border-gray-700 mt-4 rounded-md outline-none bg-gray-700 text-white block mx-auto'>Login</button>
          </form>

          <div className="head w-full bg-gray-700 px-3 py-2 rounded-md mt-5">
            <div className="links w-full text-center flex items-start justify-center gap-2 flex-wrap ">
              <p className='text-white'>Not have an account <a className='text-blue-300' href="#">Signup</a> </p>
              <p className='text-white'>Forget password <a className='text-blue-300' href="#">Click here </a> </p>
            </div>
          </div>

        </div>


      </div>
    </main>
  );
}

export default Login