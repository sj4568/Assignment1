import React from 'react'
import ReviewCard from './ReviewCard/ReviewCard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ReviewContainer() {
    const navigate = useNavigate();
  const temp = useSelector(state => state.tempProduct)
  const reviewArr = temp?.reviews ? temp?.reviews : []
  let count =0
  const arr = reviewArr?.map(data => {
    count+=1
    return count<=3 && <ReviewCard data={data}/>
  })

  return (
    <div className="flex justify-center flex-col place-items-center py-4">
      <div className="w-[80%] lg:p-3">
        {arr}
      </div>
      {!(reviewArr?.length < 3) && <div className="buttto">
        <button className='px-3 py-2 rounded-md bg-rose-400 text-white' onClick={()=>{navigate("/review")}}>See More</button>
      </div>
      }
    </div>
  );
}
