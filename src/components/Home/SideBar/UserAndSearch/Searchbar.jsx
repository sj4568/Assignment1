import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Searchbar() {
    
  return (
    <div className="w-[100%] flex justify-center place-items-center">
      <input type="text" placeholder="Search" className="w-[90%] rounded-md bg-slate-100 px-2 py-1" />
      <button className="w-[10%] text-sm -translate-x-5">
        <FaSearch />
      </button>
    </div>
  );
}
