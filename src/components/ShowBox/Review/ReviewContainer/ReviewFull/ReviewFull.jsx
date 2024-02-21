import React from 'react'
import { useSelector } from 'react-redux';
import ReviewCard from '../ReviewCard/ReviewCard';

export default function ReviewFull() {
     const temp = useSelector((state) => state.tempProduct);
     const reviewArr = temp?.reviews ? temp?.reviews : [];
     
     const arr = reviewArr?.map((data) => {
       
       return <ReviewCard data={data} />
     });
  return (
    <div className=' h-screen sale overflow-scroll'>
          <div className="header p-4 bg-rose-400 text-white lg:text-2xl">
              <div>All Reviews of {temp?.name }</div>
          </div>
          <div className="cont">
              {arr}
          </div>
    </div>
  )
}
