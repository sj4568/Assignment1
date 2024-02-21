import React from 'react'
import { FaHeadset, FaTruckMoving } from 'react-icons/fa';
import {FaClockRotateLeft } from 'react-icons/fa6'

export default function Service() {
  return (
    <div className="w-full py-28  bg-white flex justify-center place-items-center">
      <div className=" flex flex-col gap-5 lg:gap-4 px-3  lg:flex-row justify-center">
        <div className=" bg-red-200 rounded-[20px] p-4 group w-full">
          <div className="w-full h-[46px] flex justify-center -translate-y-[55px] ">
            <div className="w-[80px] h-[80px]  bg-rose-400 rounded-[30px] flex justify-center place-items-center text-4xl text-white group-hover:-translate-y-16 transition duration-500 group-hover:rotate-[360deg]">
              <FaTruckMoving />
            </div>
          </div>
          <div className="text ">
            <div className=" text-black text-2xl mb-2 font-bold links">
              Free Shipping
            </div>
            <div className=" text-black text-[20px]  font-light jura">
              free shipping for all coustomers
            </div>
          </div>
        </div>
        <div className=" bg-emerald-200 rounded-[20px] p-4 group w-full">
          <div className="w-full h-[46px] flex justify-center -translate-y-[55px] ">
            <div className="w-[80px] h-[80px] bg-teal-400  rounded-[30px] flex justify-center place-items-center text-4xl text-white group-hover:-translate-y-16 transition duration-500 group-hover:rotate-[360deg]">
              <FaClockRotateLeft />
            </div>
          </div>
          <div className="text">
            <div className=" text-black text-2xl mb-2 font-bold links">
              14 Days Return
            </div>
            <div className=" text-black text-[20px]    font-light jura">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
        </div>
        <div className=" bg-zinc-200 rounded-[20px] p-4 group w-full">
          <div className="w-full h-[46px] flex justify-center -translate-y-[55px] ">
            <div className="w-[80px] h-[80px]  bg-gray-600 rounded-[30px] flex justify-center place-items-center text-4xl text-white group-hover:-translate-y-16 transition duration-500 group-hover:rotate-[360deg]">
              <FaHeadset />
            </div>
          </div>
          <div className="text relative">
            <div className=" text-black text-2xl mb-2 font-bold links">
              24/7 Customer Service
            </div>
            <div className=" text-black text-[20px]  font-light jura">
              free shipping for all coustomers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
