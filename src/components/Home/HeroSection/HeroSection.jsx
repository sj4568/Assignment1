import React from "react";
import lady from "../../../assets/shopping/lady.png";
export default function HeroSection() {
  return (
    <div className=" ">
    <div className="w-full lg:h-screen md:h-[60vh]  bg-rose-400 flex justify-around  ">      
      <div className="w-[50%]   flex justify-center  place-items-center">
        <div className="p-3 lg:p-0 py-5 lg:py-0">
          <div className="mim-text text-white lg:text-4xl text-sm font-extralight">
            Mim Fashion Weare
          </div>
          <div className=" text-white lg:text-7xl text-2xl font-bold sale lg:my-3">
            50% OFF Sale
          </div>
          <div className=" text-neutral-50 lg:text-2xl text-[10px] lg:w-[400px] font-thin links">
            find best clothes for man and women wear .best qualitys
          </div>
          <div className="button lg:mt-3 mt-1 links">
            <button className=" px-2 py-1  bg-white rounded-[20px] text-rose-500 shadow text-sm lg:text-xl ">
              Explore
            </button>
            <button className="px-2 py-1 text-white border border-white shadow rounded-[20px] bg-rose-400 ml-3 text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="ls w-[50%] flex justify-center relative">
       
        <img
          src={lady}
          alt=""
          className="absolute lg:h-[80%] h-[100%] md:h-[80%] w-full  object-cover drop-shadow-lg bottom-0"
        />
      </div>
      </div>
      </div>
  );
}
