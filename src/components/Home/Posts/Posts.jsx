import React from 'react'
import Header from './Header/Header'
import Postcontainer from './PostContainer/Postcontainer'

export default function Posts() {
  
  return (
    <div className='md:w-[80%] lg:w-[70%] w-full  h-screen overflow-scroll'>
      <Header />
      <Postcontainer/>
    </div>
  )
}
