import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa';

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!studentID) errors.studentID = 'Student ID is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form submitted');
    } else {
      setErrors(validationErrors);
    }
  };


  return (
    <main className='min-h-screen bg-gray-100'>
      <div className="container mx-auto flex items-center justify-center">

        <form className="md:w-[70%] mt-10 w-[90%] rounded-md shadow-md shadow-gray-300 mx-auto">

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


          <form className='mt-3'>
            <input className='md:w-[70%] w-full text-lg  block mx-auto border border-gray-700 p-2 m-2 rounded-md outline-none text-gray-700' type="text" name="stdid" placeholder='Student Id' required />
            <input className='md:w-[70%] w-full text-lg  block mx-auto border border-gray-700 p-2 m-2 rounded-md outline-none text-gray-700' type="password" name='stdpassword' placeholder='Password' required />
            <button type="submit" className='text-lg text-center w-auto p-2 border border-gray-700 mt-4 rounded-md outline-none bg-gray-700 text-white block mx-auto'>Login</button>
          </form>

          <div className="head w-full bg-gray-700 px-3 py-2 rounded-md mt-5">
           <div className="links w-full text-center flex items-start justify-center gap-2 flex-wrap ">
            <p className='text-white'>Not have an account <a className='text-blue-300' href="#">Signup</a> </p>
            <p className='text-white'>Forget password <a className='text-blue-300' href="#">Click here </a> </p>
           </div>
          </div>




        </form>


      </div>
    </main>
  );
}

export default Login