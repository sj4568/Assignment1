import React from 'react'
import Title from './Title/Title'
import Header from './Header/Header'
import ReviewForm from './ReviewForm/ReviewForm'
import ReviewContainer from './ReviewContainer/ReviewContainer'
import { useSelector } from 'react-redux'

export default function Review() {
  const temp = useSelector((state) => state.tempProduct);
  const reviewArr = temp?.reviews ? temp?.reviews : [];
  return (
    <div className='lg:p-5 sale'>
          <Title />
      <Header data={reviewArr} />
          <ReviewContainer/>
          <ReviewForm/>
    </div>
  )
}
