import React from 'react'

export default function InputBox(props) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={props?.id} className='font-thin py-1 text-rose-400'>{props?.title }</label>
            <input className='border rounded-md px-3 py-2 focus:outline-none text-sm' {...props} />
      </div>
  )
}
