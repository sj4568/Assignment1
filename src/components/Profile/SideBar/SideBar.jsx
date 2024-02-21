import React from 'react'
import ProfileMini from './ProfileMini/ProfileMini'
import SideContainer from './SideContainer/SideContainer'

export default function SideBar({handle}) {
  return (
    <div className=' h-screen shadow w-[20%] p-2'>
      <ProfileMini />
      <SideContainer handle={handle } />
    </div>
  )
}
