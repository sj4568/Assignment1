import React from 'react'
import Dasboard from './SideContent/Dashboard/Dasboard'
import Products from './SideContent/Products/Products'
import Order from './SideContent/Order/Order'


export default function MainContainer({element}) {
  return (
    <div className='p-4 w-full h-screen overflow-scroll'>
          {element}
    </div>
  )
}
