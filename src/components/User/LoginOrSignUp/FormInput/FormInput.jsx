import React from 'react'

export default function FormInput(props) {
  return (
    <div className='flex flex-col sale gap-2 my-2 w-full '>
      {props.label && <label htmlFor={props.id} className='text-base text-slate-400 font-medium '>{props.label }</label>}
          <input type="text" className='border focus:outline-none px-3 py-2 text-xs rounded-sm w-full' {...props} />
    </div>
  )
}
