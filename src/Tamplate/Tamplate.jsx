import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Tamplate(children) {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
