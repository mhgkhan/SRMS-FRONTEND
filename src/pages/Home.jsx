import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const nav = useNavigate()

  useEffect(()=>{
    localStorage.getItem("accesstoken") ? "" : nav("/login")
  })

  return (
    <div className="container">
        <h1>hello world </h1>
    </div>
  )
}

export default Home