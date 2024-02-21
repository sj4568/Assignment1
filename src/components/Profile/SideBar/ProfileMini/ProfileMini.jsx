import React from 'react'
import img from "../../../../assets/shopping/news/news1.png"
import { useSelector } from 'react-redux'
export default function ProfileMini() {
  const user = useSelector(state=>state.user)
  return (
    <div className='w-full sale pb-2 flex justify-center flex-col place-items-center' >
          <div className="imgbox flex justify-center p-2">
              <img src={user?.img} alt="" className='w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] shadow-sm object-cover rounded-full border' />
          </div>
          <div className="textbox p-1 text-center hidden lg:block md:block">
        <div className="name text-sm text-rose-400 font-semibold">{user?.name }</div>
              <div className="tag text-sm font-thin">I am a user</div>
          </div>
    </div>
  )
}
