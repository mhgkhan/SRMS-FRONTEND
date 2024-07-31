import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/profile/Profile"
import Signup from "./pages/Signup"

const App = () => {

  return (
    <BrowserRouter>
   
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App