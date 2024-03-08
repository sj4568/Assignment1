import React from 'react'
import SideBar from './SideBar/SideBar'
import Posts from './Posts/Posts'

export default function Container() {
  return (
    <div className='w-full'>
          <div className=' place-items-center w-full h-screen flex '>
              <SideBar />
              <Posts/>
      </div>
    </div>
  )
}
