import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const nav = useNavigate()

  useEffect(()=>{
    localStorage.getItem("accesstoken") ? "" : nav("/login")
  })

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container">
        hello world 
      </div>
    </main>
  )
}

export default Home