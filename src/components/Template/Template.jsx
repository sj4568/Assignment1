import React from 'react'
import {Outlet } from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Cart from '../Cart/Cart'
export default function Template() {
    return (
        <>
            <NavBar />
            <Cart/>
            <Outlet />
            <Footer/>
        </>
  )
}
