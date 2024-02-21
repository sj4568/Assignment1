import React from 'react'
import {MdSpeed } from 'react-icons/md'
export default function MenuBar({icon,text,handle,comp}) {
  return (
    <div>
          <div className="con flex place-items-start p-2 cursor-pointer  w-[80%]  justify-start  gap-1 text-xl text-white" onClick={()=>{handle(comp)}}>
              <div className="icon text-2xl">
                  {icon}
              </div>
              <div className="text">
                  {text}
              </div>
      </div>
    </div>
  )
}
