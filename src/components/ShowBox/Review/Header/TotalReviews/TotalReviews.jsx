import React from 'react'

export default function TotalReviews({count}) {
  return (
    <div className="sale flex flex-col lg:gap-2 lg:w-auto w-full lg:px-5">
      <div className="lg:text-2xl text-sm">Total Reviws</div>
      <div className="lg:text-4xl text-base font-semibold">{count?count:0}</div>
      <div className="lg:text-sm font-thin text-[10px]">
        Total Reviews in this year
      </div>
    </div>
  );
}
