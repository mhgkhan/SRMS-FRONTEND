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
     <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-gray-700 text-white p-8 rounded-lg shadow-lg w-[85%] max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Student Login</h1>
        <p className="mb-8 text-center">Please enter your credentials to access your results</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="studentID">
              Student ID
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaUser className="text-gray-400 mx-2" />
              <input
                type="text"
                id="studentID"
                className="w-full p-2 bg-gray-800 text-white border-none outline-none"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
            {errors.studentID && <p className="text-red-500 text-sm mt-2">{errors.studentID}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaLock className="text-gray-400 mx-2" />
              <input
                type="password"
                id="password"
                className="w-full p-2 bg-gray-800 text-white border-none outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login