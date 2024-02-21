import React, { useState } from 'react'
import SideBar from './SideBar/SideBar'
import Products from './Products/Products'
import { motion } from 'framer-motion'

export default function ProductStore() {
  const [showSideBar, setShowSideBar] = useState(true)
  function HandleSideBar(params)
  {
    setShowSideBar(prev=>params?params:!prev)
  }
  return (
    <motion.div layout  className='flex justify-between w-full  gap-3 flex-col lg:flex-row md:flex-row'>
          <SideBar show={showSideBar} />
      <Products hideSideBar={HandleSideBar } status={showSideBar} />
          
    </motion.div>
  )
}
