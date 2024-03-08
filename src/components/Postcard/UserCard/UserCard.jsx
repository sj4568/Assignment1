import React from 'react'
import image from "../../../assets/Avatar/avatar.png"
export default function UserCard() {
  return (
      <div className='h-[40px] flex w-full gap-2 place-items-center'>
          
          <div className="image w-[30px] rounded-full overflow-hidden">
              <img src={image} alt="" className='w-full' />
          </div>
          <div>
              <h1>MD Shariful Islam</h1>
              <span>{new Date().getDate() }</span>
          </div>
          
    </div>
  )
}
