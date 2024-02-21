import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import AdminLogin from '../Admin/AdminLogIn/AdminLogin'

export default function AuthAdmin() {
    const admin = useSelector(state=>state.admin)
  return admin['email']?<Outlet/>:<AdminLogin/>
}
