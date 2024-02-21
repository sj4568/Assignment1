import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Bar({ star, color, amount,percent }) {
    const prog = `relative lg:w-[100px] w-[50px] lg:h-[5px] h-[3px] bg-slate-200 rounded before:absolute before:h-full before:w-[${percent}%] before:rounded before:bg-orange-300`;
  return (
    <div className='flex w-full gap-1 place-items-center justify-start'>
          <span className='flex place-items-center  lg:text-[10px] text-[7px]'><FaStar className='text-slate-300 text-[10px]' />{ star}</span>
          <div className={prog}>

          </div>
          <div className='lg:text-[10px] text-[7px] font-bold'>{amount}</div>
    </div>
  )
}
