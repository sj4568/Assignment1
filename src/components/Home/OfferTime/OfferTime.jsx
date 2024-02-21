import React, { useCallback } from 'react'
import img from "../../../assets/shopping/priceing.png"
import { useState } from 'react';
import { useEffect } from 'react';
export default function OfferTime() {
  const [date, setdate] = useState(new Date)
//   const Func = useCallback(() => {
//    const time = setTimeout(() => {
//      setdate(new Date());
//    }, 1000);
//  })
//   Func()
  return (
    <div className="pt-5 ">
      <div className="flex justify-center px-8 lg:gap-52 flex-col-reverse lg:flex-row  ">
        <div className="textBox mb-3">
          <div className="">
            <span className="text-rose-400 text-5xl font-bold sale">
              Deal Of
            </span>
            <span className="text-black text-5xl font-bold sale">
              {" "}
              This Month
            </span>
          </div>
          <div className="days flex  my-6 gap-3  ">
            <div className="priceing   lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]  flex justify-center place-items-center flex-col bg-rose-400 shadow-md rounded-full ">
              <h1 className="font-bold lg:text-4xl sale text-white">{ date.getDate()}</h1>
              <span className="sale lg:text-xl font-bold text-white">Days</span>
            </div>
            <div className="priceing  lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] flex justify-center place-items-center flex-col bg-white shadow-md rounded-full">
              <h1 className="font-bold lg:text-4xl sale text-rose-400">{ date.getHours()}</h1>
              <span className="sale text-lg:xl font-bold text-rose-400">Houres</span>
            </div>
            <div className="priceing lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]  flex justify-center place-items-center flex-col bg-rose-400 shadow-md rounded-full">
              <h1 className="font-bold lg:text-4xl sale text-white">{ date.getMinutes()}</h1>
              <span className="sale lg:text-md font-bold text-white">Minutes</span>
            </div>
            <div className="priceing  lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] flex justify-center place-items-center flex-col bg-white shadow-md rounded-full">
              <h1 className="font-bold lg:text-4xl sale text-rose-400">{ date.getSeconds()}</h1>
              <span className="sale lg:text-md text-[12px] font-bold text-rose-400">Secends</span>
            </div>
                  </div>
                  <div className="button">
                      <button className='px-10 py-2 text-white bg-rose-400 rounded-full font-bold'>Resister</button>
                  </div>
        </div>
        <div className="imgBox flex justify-center mb-3">
          <div className="div h-[] w-[100%] md:w-[300px] bg-rose-400 rounded-tl-3xl rounded-tr-3xl ">
            <img src={img} alt="" className="h-full w-full object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
}
