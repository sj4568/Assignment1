import React, { useEffect } from 'react'
import Container from '../components/Home/Container'
import { useDispatch } from 'react-redux'
import { FindPost } from '../components/Store/Slices/Slices'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FindPost())
   },[])
  return (
    <div className='w-full'>
      <Container/>
    </div>
  )
}
