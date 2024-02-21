import React from 'react'
import ProfileContent from './Contents/ProfileContent'
import OrderContainer from './Contents/OrderContainer/OrderContainer'
import { useSelector } from 'react-redux'

export default function ProfileContainer({data}) {
  const order = useSelector(state => state.orders)
  return (
    <div className='w-[90%] overflow-scroll max-h-screen'>
      {data}
    </div>
  )
}
