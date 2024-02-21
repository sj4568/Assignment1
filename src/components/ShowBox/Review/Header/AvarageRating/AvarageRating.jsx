import React, { useState } from 'react'
import Star from './Star/Star';

export default function AvarageRating({ data }) {
  let stars = 0
  for (let i of data)
  {
   stars+=i.star
  }
  const avarage = Math.ceil(stars/data?.length)
  
  
  return (
    <div className="sale flex flex-col lg:gap-2 lg:w-auto w-full lg:px-5">
      <div className="lg:text-2xl text-sm">Avarage Rating</div>
          <div className="lg:text-4xl text-base font-semibold flex place-items-center gap-2">
        <span>{avarage?avarage:0 }</span>
        <Star count={avarage} />
      </div>
      <div className="lg:text-sm font-thin text-[10px]">
        Avaarage rating in this year
      </div>
    </div>
  );
}
