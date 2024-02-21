import React from 'react'

export default function InputElement(props) {
  return (
    <div className='flex flex-col gap-1 sale py-2'>
          {props.label && <label htmlFor={props.id} className='text-sm font-bold'>{props.label}</label>}
          <input type="text" className='w-full px-3 py-2 border focus:outline-none rounded-sm text-xs' {...props} />
    </div>
  )
}
