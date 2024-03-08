import React from "react";
import img from "../../../../assets/Resister/image.jpg";
export default function ImageBox({title}) {
  return (
    <div className="w-[100%]  flex flex-col ">
      <div className="title h-[30%] w-full flex justify-start">
              <h1 className=" font-bold text-orange-600 pl-8 pb-4 text-3xl">{title}</h1>
      </div>
      <div className="image w-full h-[70%] flex justify-center">
        <img src={img} alt="" className="lg:w-full md:w-full w-[40%] h-full" />
      </div>
    </div>
  );
}
