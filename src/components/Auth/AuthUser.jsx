import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Resister from '../../Page/Resister'

export default function AuthUser() {
    const user = useSelector(state=>state.user)
  return user['email']?<Outlet/>:<Resister/>
}
