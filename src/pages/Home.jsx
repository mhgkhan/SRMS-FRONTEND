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
  }, [ ])

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto h-full">
         <section className=" relative  student-profile w-full min-h-[500px]  p-2 mt-4 bg-gray-700  shadow-lg shadow-gray-300" style={{borderRadius:"300px 10px 10px 10px"}}>
            <div className="student-info   p-5 ml-[300px] h-full text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit perspiciatis, amet nemo dolores, ex voluptatum perferendis impedit ipsa quo illum modi. Eum soluta, nobis molestias vero ullam in corporis. Doloremque aut, dignissimos vero suscipit voluptatem corporis alias aperiam tempora dicta illo non mollitia a nisi nesciunt autem molestias enim numquam perferendis animi beatae nihil sit quo magni! Facere maiores iure, fugiat asperiores deserunt cupiditate autem qui quia cumque veniam iste porro. Eos consectetur totam laborum adipisci quis exercitationem a explicabo ratione non error assumenda nihil odit, laudantium ullam reprehenderit corporis at iure rem magnam repellendus delectus in laboriosam commodi id? Mollitia quia impedit delectus minima natus necessitatibus optio aliquid aut eligendi eos quisquam nulla et, odit sapiente temporibus dolor illo architecto tenetur modi rerum ratione eaque facere? Consectetur esse rerum tempore placeat, optio ipsam delectus eius at harum excepturi nam corrupti eos illum ex odit perferendis architecto nobis nisi officia id modi magni magnam. Nulla beatae officiis necessitatibus! Sed itaque nisi sunt aliquam ab nesciunt illum animi atque harum voluptatum, vero sequi tempora, dicta minus culpa blanditiis totam. Nihil ex rerum, deserunt vero harum a deleniti quia voluptate optio earum, officiis aperiam cum necessitatibus voluptatum quos tempora quam? Itaque ut consectetur eum quae saepe similique molestias corporis nisi harum, maiores consequuntur! Quod exercitationem veniam soluta itaque repudiandae at, ipsum quaerat deleniti, tempora voluptate velit totam saepe laudantium aliquid consequuntur numquam fugiat nostrum culpa magni rem eos impedit provident. Laboriosam et dolores eveniet eligendi odit quo, cum, impedit eos quisquam, quod blanditiis necessitatibus nam nobis! Neque cupiditate doloribus fugit, reprehenderit aperiam debitis, minus vero officiis sint architecto, pariatur ipsa possimus deserunt molestiae. Quam aliquid, odio assumenda fugiat eius qui neque veniam iste. Aut ducimus alias eum vero laborum recusandae dolor maxime? Eius atque vel at deleniti. Fugit quaerat ducimus beatae fuga?
            </div>
            <div className="profile-image h-auto w-[300px] absolute top-0 left-0 flex items-start justify-between flex-col">

              <img src="/images/myimg.jpg" alt="my profile picture" className='w-[300px] mx-auto block h-[300px] bg-blue-400 rounded-full shadow-md shadow-gray-500' />
              <h2 className="text-xl text-white italic text-center w-full mt-2 ">Mr.</h2>
              <h1 className="text-4xl text-white font-bold text-center w-full ">M. Hasnain</h1>
              <h2 className="text-lg text-white italic text-center w-full mt-2 ">S/D/W/O</h2>
              <h1 className="text-2xl text-white font-bold text-center w-full ">Mir Samad</h1>

            </div>
         </section>
      </div>
    </main>
  )
}

export default Home