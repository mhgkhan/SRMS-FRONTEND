import React from 'react'

const Cols = ({title,desc}) => {
  return (
    <div className="student-inner-student-dat mt-2">
      <div className="row flex w-full items-center justify-between gap-x-7">
        <div className="left font-bold">
          {title}
        </div>
        <div className="right">
         {desc}
        </div>
      </div>
    </div>
  )
}

export default Cols