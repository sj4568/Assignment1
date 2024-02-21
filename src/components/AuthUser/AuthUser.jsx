import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Form from '../User/LoginOrSignUp/Form'

export default function AuthUser() {
    const user = useSelector(state => state.user)
   console.log(user);
    return user['name'] ?<Outlet/>:<Form/>
}
