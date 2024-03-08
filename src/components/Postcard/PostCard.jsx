import React from "react";
import UserCard from "./UserCard/UserCard";
import { FaRegComment, FaRegHeart, FaRegShareSquare, FaShareAlt } from "react-icons/fa";
import image from "../../assets/Images/image.jpg"
export default function PostCard({data}) {
  return (
    <div className="flex justify-center place-items-center p-4 flex-col lg:w-[80%] md:w-[80%] w-full">
      <UserCard />
      <div className="des p-2 ">
      {data?.title}
      </div>
      <div className="img w-full  relative p-3">
        <img src={data?.url?data.url: image} alt="" className="w-full max-h-[400px] object-cover" />
      </div>
      <div className="social w-full flex justify-around place-items-center px-3">
        <button>
          <FaRegHeart />
        </button>
        <button>
          <FaRegComment />
        </button>
        <button>
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
}
