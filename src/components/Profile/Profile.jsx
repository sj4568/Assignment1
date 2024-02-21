import React, { useState } from 'react'
import ProfileHead from './SideBar/SideBar'
import SideBar from './SideBar/SideBar'
import Container from '../ProductStore/Products/Container/Container'
import ProfileContainer from './Container/Container'
import ProfileContent from './Container/Contents/ProfileContent'

export default function Profile() {
  const [func, setFunc] = useState(<ProfileContent/>)
  function Temp(obj)
  {
    setFunc(obj)
  }
  return (
    <div className='flex'>
          <SideBar handle={Temp} />
      <ProfileContainer data={func } />
    </div>
  )
}
