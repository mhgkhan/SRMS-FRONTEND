import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-gray-700 h-auto'>
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col md:items-end items-center justify-between ">


          <div className="logo px-2 pt-2 flex gap-[1px]">
            <span className='bg-white text-2xl text-gray-700 font-bold  border-2 border-gray-600 px-2 pt-1  rounded-md'>GH</span>
            <span className='bg-white text-2xl text-gray-700 italic  border-2 border-gray-600 px-2 pt-1  rounded-md'>SRMS</span>
          </div>



        <nav className='md:mt-0 mt-3'>
          <ul className='flex items-end justify-center gap-2'>

            <li>
              <Link className='text-white p-2 font-bold hover:bg-white hover:text-black rounded-lg transition-all duration-500' to={'/'}>HOME</Link>
            </li>
            <li>
              <Link className='text-white p-2 font-bold hover:bg-white hover:text-black rounded-lg transition-all duration-500' to={'/studentresult'}>RESULT</Link>
            </li>
            <li>
              <Link className='text-white p-2 font-bold hover:bg-white hover:text-black rounded-lg transition-all duration-500' to={'/signup'}>LOGIN</Link>
            </li>
          </ul>
        </nav>



        </div>
      </div>
    </header>
  )
}

export default Header