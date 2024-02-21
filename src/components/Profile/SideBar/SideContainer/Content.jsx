import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function Content({ icon, text, func, handle,comp }) {
  function Add()
  {
    handle(comp)
    
  }
  return (
    <div className='flex py-2 px-4 place-items-center sale text-white group bg-rose-400 gap-2 hover:scale-110 transition duration-150 rounded-sm cursor-pointer' onClick={func?func:Add}>
          <div>{icon }</div>
          <div className=' hidden lg:block md:block  '>{text}</div>
    </div>
  )
}
