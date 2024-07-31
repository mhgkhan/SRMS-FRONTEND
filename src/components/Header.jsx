import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-300'>
      <div className="container mx-auto">
        <div className="flex items-end justify-between gap-3">
          <div className="logo">
            <span>GH</span>
            <span>SRMS</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header