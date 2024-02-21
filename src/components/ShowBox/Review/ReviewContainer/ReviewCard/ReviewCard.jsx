import React from "react";
import img from "../../../../../assets/shopping/news/news3.png";
import Star from "../../Header/AvarageRating/Star/Star";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
export default function ReviewCard({ data }) {
  const user = data?.user
  return (
    <div className="flex justify-between p-3 border-t flex-col lg:flex-row md:flex-row">
      <div className="w-full flex  ">
        <div className="user pl-5 lg:grid flex grid-cols-2 lg:gap-3 gap-2 h-[50px] place-items-center">
          <div className="w-full h-full relative">
            <img src={user?.img} alt="" className="lg:absolute rounded-full lg:w-[30%] lg:right-0 h-full object-cover" />
          </div>
          <div className="w-full">
            <div className="lg:text-base text-[10px] font-semibold">{user?.name}</div>
            <div className="email lg:text-sm text-[7px] font-thin">{user?.email }</div>
          </div>
        </div>
      </div>
      <div className="massage w-full">
        <div className="head flex gap-2 place-items-center py-2">
          <Star count={data?.star} />
          <div className="date">12/03/23</div>
        </div>
        <div className="massage text-sm">
          {data.massage}
              </div>
              <div className="like flex place-items-centerm gap-3 text-slate-300 p-4">
                  <FaThumbsUp />
                  <FaThumbsDown/>
              </div>
      </div>
    </div>
  );
}
