import React from "react";
import img1 from "../../../assets/shopping/news/news1.png";
import img2 from "../../../assets/shopping/news/news 2.png";
import img3 from "../../../assets/shopping/news/news3.png";
export default function NewsBlog() {
  return (
    <div className="news blogs w-full  bg-white flex justify-center flex-col place-items-center pb-3">
      <div className="header flex justify-center flex-col place-items-center gap-2 ">
        <div className="">
          <span className="text-rose-400 lg:text-4xl text-2xl font-bold sale">
            Our Latest
          </span>
          <span className="text-black lg:text-4xl text-2xl font-bold sale">
            {" "}
            news & Blog
          </span>
        </div>
        <div className="  text-black text-lg w-[350px] text-center font-thin sale">
          join our community for enjoy our best policy join our community .
        </div>
      </div>
      <div className="pt-3 grid grid-cols-1 lg:grid-cols-2 place-items-center w-[80%] lg:p-5 gap-3">
        <div className="left-site flex flex-col  gap-4 h-full  justify-between place-items-center">
          <div className="box flex w-full h-full gap-4 flex-col lg:flex-row">
            <div className="imgBox bg-red-200 h-full w-full">
              <img src={img1} alt="" className="w-full h-full object-cover " />
            </div>
            <div className="textBox w-[100%] mt-3 ">
              <div className=" text-black text-xl font-bold sale">
                Beautiful & Fashion
              </div>
              <div className=" text-black text-lg font-thin sale mt-2">
                posted on 5 july in 2023
              </div>
              <div className="flex flex-col mt-3">
                <span className="text-black text-sm font-extralight sale">
                  Thanks to remove.bg's clever AI, you can slash editing time -
                  and have more fun!
                </span>
                <span className="text-rose-400 text-sm mt-3 font-semibold sale">
                  Learn More
                </span>
              </div>
            </div>
          </div>
          <div className="box flex w-full h-full gap-4 flex-col lg:flex-row">
            <div className="imgBox bg-rose-400 w-full h-full">
              <img src={img3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="textBox w-[100%] mt-3 ">
              <div className=" text-black text-xl font-bold sale">
                Beautiful & Fashion
              </div>
              <div className=" text-black text-lg font-thin sale mt-2">
                posted on 5 july in 2023
              </div>
              <div className="flex flex-col mt-3">
                <span className="text-black text-sm font-extralight sale">
                  Thanks to remove.bg's clever AI, you can slash editing time -
                  and have more fun!
                </span>
                <span className="text-rose-400 text-sm mt-3 font-semibold sale">
                  Learn More
                </span>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="imgBox w-full h-full bg-neutral-500 relative">
            <img src={img2} alt="" className="" /> 
            <div className="absolute h-[50%] w-full bottom-10 lg:bottom-0 left-0 flex flex-col p-4 drop-shadow-lg">
              <span className="text-white text-4xl font-bold sale lg:mb-5 mb-3">
                New Fashion is here
               
              </span>
              <span className="text-white text-xl font-bold sale">
               
              </span>
              <span className="text-white text-sm lg:text-lg font-normal sale ">
                No matter if you want to make a background transparent (PNG) or
                add a white background to a photo - you can do all this and more
                with remove.bg.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
