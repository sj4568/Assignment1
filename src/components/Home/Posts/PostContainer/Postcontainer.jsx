import React, { useEffect, useRef, useState } from "react";
import PostCard from "../../../Postcard/PostCard";
import { useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";

export default function Postcontainer() {
  const MyRef = useRef(null);
  const posts = useSelector((state) => state.posts);
  const data = () => {
    let arr = [];
    if (posts) {
      for (let i = 0; i < 101; i++) {
        arr.push(posts[i]);
      }
    }

    return arr;
    };
    const [position,setPosition]=useState(0)
  const postElement = data()?.map((data, index) => {
    return <PostCard data={data} key={index} />;
  });
     const handleScroll = (e) => {
         setPosition(e.currentTarget.scrollTop);
         console.log(position);
     };
  
  return (
      <div ref={MyRef} onScroll={handleScroll} className=" overflow-scroll flex justify-center place-items-center flex-col scrollbar scrollbar-none">
      {posts?.length ? postElement : <Loader />}
    </div>
  );
}
