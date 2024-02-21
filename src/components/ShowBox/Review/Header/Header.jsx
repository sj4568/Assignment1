import React from 'react'
import TotalReviews from './TotalReviews/TotalReviews'
import AvarageRating from './AvarageRating/AvarageRating'
import Proggress from './Proggres/Proggress'

export default function Header({ data }) {
  const amount = data?.length
  console.log(amount);
  return (
    <div className='grid grid-cols-3 justify-center place-items-center p-3 w-full gap-3'>
          <TotalReviews count={amount} />
          <AvarageRating data={data} />
          <Proggress/>
    </div>
  )
}
