import React from 'react'

export default function Title() {
    const current_date = new Date().toLocaleDateString()
    
  return (
      <div className='flex justify-between place-items-center p-3'>
          <div className='text-3xl font-semibold'>Reviews</div>
          <div className='px-3 py-1 border rounded-md text-sm'>{current_date}</div>
    </div>
  )
}
