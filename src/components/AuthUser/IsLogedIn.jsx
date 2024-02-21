import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import PleaseSignIn from '../NotFound/PleaseSignIn'

export default function IsLogedIn() {
    const user = useSelector(state => state.user)
  return user['name']?<Outlet/>:<PleaseSignIn/>
}
