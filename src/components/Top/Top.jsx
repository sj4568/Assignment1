import React from 'react'

export default function Top(props) {
  return (
      <div className='top w-full flex justify-center place-items-center'>
          <div className="top-container flex justify-center flex-col place-items-center">
              <h1 className='text-3xl font-bold text-orange-500'>{ props.head}</h1>
              <p className='text-slate-500'>{props.tag }</p>
              
          </div>
       
    </div>
  )
}
