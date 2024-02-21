import React from 'react'
import {IoFilter } from "react-icons/io5"
import Container from './Container/Container';
export default function Products(props) {
  return (
    <div className="w-[100%] h-screen overflow-y-scroll sale mt-3 overflow-hidden px-3">
      <div className="header flex place-items-center justify-end gap-3">
        <button className="flex  place-items-center gap-2" onClick={()=>{props.hideSideBar()}}>
          <span>{props.status?"Hide":"Show"} Filter</span>
          <IoFilter />
              </button>
              <select name="" id="" className="form-select border-none w-[120px]">
                  <option value="">Sort By</option>
              </select>
          </div>
      <Container handle={props.hideSideBar } />
    </div>
  );
}
