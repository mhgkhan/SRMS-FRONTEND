import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiDomain } from '../config/DomainUrls';
import toast from 'react-hot-toast';
import StudentInfoCard from '../components/home/StudentInfoCard';

const Home = () => {

  const nav = useNavigate();
  const [userToken, setUserToken] = useState("")


  const [userVerifyLoading, setUserVerifyLoading] = useState(false)

  const checkAuthorize = async (token) => {
    setUserVerifyLoading(true)
    try {
      const verifyLoading = toast.loading("Wait Loading ...", {
        icon: "🔃",
        id: "toastUserVerify"
      })
      const reqAndRes = await (await fetch(`${ApiDomain}appgh/auth/student/`, {
        method: "GET",
        headers: { "content-type": "application/json", studentToken: token }
      })).json();

      console.log(reqAndRes)


      setUserVerifyLoading(false)
      toast.remove("toastUserVerify")

      if (reqAndRes.success) {
        toast.success("User Verified", { icon: "🎉" })
      }
      else {
        toast.error("Please Login in again or try again later", { icon: "😒" })
        nav("/login")
      }


    } catch (error) {
      toast.error("some error occured please login again", {
        icon: "❌"
      })
      nav("/login")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("usertoken")) {

      setUserToken(localStorage.getItem("usertoken"))
      // api for checking if this token is valid or not and check if this user are eists or not 
      checkAuthorize(localStorage.getItem("usertoken"))


    }
    else {
      nav("/login")
    }
  }, [])

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto h-full md:p-0 p-3 ">
        <section className=" md:my-3 md:mt-[100px] relative student-profile w-full min-h-[500px] flex items-center justify-center md:flex flex-col-reverse p-2 mt-[150px] bg-gray-700  shadow-lg shadow-gray-300" style={{ borderRadius: "300px 10px 10px 10px" }}>
          <div className="student-info   md:p-5 md:ml-[300px] md:h-full text-gray-200">
            <h1 className="md:block hidden text-5xl font-bold text-center text-white">THE STUDENT SCHOOL NAME </h1>
            <p className='md:block hidden text-center m-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, voluptatem consequatur culpa eligendi eos cumque rem tempora pariatur porro architecto?</p>
            <div className="student-data w-full flex items-center justify-around flex-wrap ">


              <StudentInfoCard
                data={[{ title: "Full Name", desc: "Muhammad Hasnain" }, { title: "F/Name", desc: "Planki Khan" }, { title: "DOB", desc: "01/01/2000" },{title:"Class", desc:"10th"},{title:"Roll No", desc:12},{title:"Global Id",desc:"10th12"}]}
                heading={"Personal Info"} />

              <StudentInfoCard
                data={[{ title: "Student Attandence", desc: "Good" }, { title: "Behavior", desc: "Excellent" }, { title: "Total Passed/Fail Tests", desc: "30/12" },{title:"Bullshet", desc:"No"},{title:"Hardwork", desc:"Yes"},{title:"Sport Player of",desc:"Volley Ball"}]}
                heading={"Student Perfornmance"} />

            </div>


          </div>
          <div className="  profile-image md:mt-[-50px] mt-[-100px] h-auto md:w-[250px] w-full md:absolute top-0 left-0 flex items-start justify-between flex-col">

            <img src="/images/myimg.jpg" alt="my profile picture" className='md:w-[250px] w-[170px] mx-auto block md:h-[250px] h-[170px] bg-blue-400 rounded-full shadow-md shadow-gray-500' />
            <h2 className="text-xl text-white italic text-center w-full mt-2 ">Mr.</h2>
            <h1 className="text-4xl text-white font-bold text-center w-full ">M. Hasnain</h1>
            <h2 className="text-lg text-white italic text-center w-full mt-2 ">S/O</h2>
            <h1 className="text-2xl text-white font-bold text-center w-full ">Mir Samad</h1>
            <h2 className="text-lg text-white italic text-center w-full mt-2 ">Role/</h2>
            <h1 className="text-2xl text-white font-bold text-center w-full ">Student</h1>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home