import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Star({ count }) {
  const str = toString(count)
  let arr = []
  let counter = 0
  for (let i = 0; i <= 4; i++)
  {
    if (counter < count)
    {
      arr.push(
        <>
          <span className="text-orange-300">
            {" "}
            <FaStar key={i} />
          </span>
        </>
      );
    } else
    {
      arr.push(
        <>
          <span className=" text-slate-400">
            {" "}
            <FaStar key={i} />
          </span>
        </>
      );
      }
    counter+=1
    }
  
  return (
    <div className='text-sm flex'>
      {arr}
    </div>
  )
}
