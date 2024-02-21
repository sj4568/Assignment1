import React from 'react'
import Order from './Order/Order'
import DailyChart from './Chart/Chart';


export default function OrderAndGraphs() {
  return (
    <div className="w-full ">
      <div className='py-2 my-3'>
        <DailyChart />
      </div>
      <div className="flex justify-center place-items-center shadow p-3 m-3">
        <div className="contai w-full gap-2">
          <Order />
        </div>
      </div>
    </div>
  );
}
