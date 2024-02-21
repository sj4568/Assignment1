import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'

export default function Content({icon,amount,type,des,Bg,Ibg,CallBack,text}) {
    const [bg, setBg] = useState(Bg)
    const [ibg, setIbg] = useState(Ibg)
    function Click()
    {
        if (CallBack)
        {
            CallBack(text)
            }
    }
  return (
      <div className={`flex justify-between place-items-center ${bg} w-full p-4 text-white  lg:w-[30%] gap-4 rounded-sm hover:-translate-y-4 transition duration-200 cursor-pointer`} onClick={Click}>
          <div className="textSide w-full">
              <div className="amount text-2xl font-medium">
                  {amount}
              </div>
              <div className="name text-sm">
                  {type}
              </div>
              <div className="detlails text-[10px] font-extralight">
                  {des}
              </div>
          </div>
          <div className="iconSide w-[20%]">
              <div className={`con p-3 ${ibg} rounded-full`}>
                  {icon}
              </div>
          </div>
    </div>
  )
}
