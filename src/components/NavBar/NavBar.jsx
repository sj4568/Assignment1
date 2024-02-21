import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaCartPlus,
  FaHome,
  FaPercent,
  FaRegHeart,
  FaSalesforce,
  FaSearch,
  FaShoppingBag,
  FaStore,
  FaUser,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { SaveSotreData, ShowCart } from "../Store/Slices/StoreSlice";
import DetailsBox from "./DetailsBox/DetailsBox";
export default function NavBar() {
  const products = useSelector((state) => state.t_pro);
  const navigate = useNavigate()
  const myRef = useRef(null)
  
  window.onscroll = () => {
    myRef.current.classList.toggle("fixed",scrollY>0)
  }
  const [Width, setWidth] = useState(window.innerWidth)
  window.onresize = () => {
    setWidth(window.innerWidth)
    
  }
  const smallSize = Width < 700 ? false : true
  const [formData, setFormData] = useState("")
   const data = useSelector((state) => state.wishList);
  const dispatch = useDispatch()
  function wishList()
  {
   
    dispatch(SaveSotreData(data))
     navigate("/store");
  }
  function AddValue(e)
  {
    setFormData(e.target.value)
     const pro = products.filter((data) => {
       const name = data.name.toLowerCase().split(" ");
       const dat = e.target.value.toLowerCase().split(" ");
       for (let i of dat) {
         for (let j of name) {
           if (i == j) {
             return data;
           }
         }
       }
     });
     dispatch(SaveSotreData(pro));
     navigate("/store");
    if (!formData)
    {
      dispatch(SaveSotreData(products))
     
    }
    
  }
  function HandleForm()
  {
    const pro = products.filter((data) => {
      const name = data.name.toLowerCase().split(" ");
      const dat = formData.toLowerCase().split(" ")
      for (let i of dat) {
        for (let j of name) {
          if (i == j) {
            return data;
          }
        }
      }
    });
    dispatch(SaveSotreData(pro));
    navigate("/store")
  }
  function Store()
  {
    dispatch(SaveSotreData(products))
  }
  function Cart()
  {
    dispatch(ShowCart())
  }
  const cartList = useSelector(state => state.Cart)
  const wishlist = useSelector(state => state.wishList)
  const admin = useSelector(state=>state.admin)
  return (
  <>
    
      
        <>
          {smallSize ? (
            <>
              <div
                className=" z-20 w-full h-[56px] bg-white shadow-md border  flex justify-between px-10 place-items-center"
                ref={myRef}
              >
                <div className="leftSite flex justify-between place-items-center gap-5 w-[60%]">
                  <div className="">
                    <span className="nav-brand text-rose-400 text-4xl font-normal font-['Inspiration']">
                      Mim
                    </span>
                    <span className="text-black text-[15px] font-normal font-['Inspiration']">
                      {" "}
                      Fashion
                    </span>
                </div>
                
                  <div className="links flex justify-between place-items-center gap-4">
                    <Link
                      className="text-center text-rose-400 text-[15px] font-normal font-['Inria Sans']"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="text-center text-rose-400 text-[15px] font-normal font-['Inria Sans']"
                      to="/store"
                      onClick={Store}
                    >
                      store
                    </Link>
                    <Link className="text-center text-rose-400 text-[15px] font-normal font-['Inria Sans']">
                      Accossries
                    </Link>
                    <Link className="text-center text-rose-400 text-[15px] font-normal font-['Inria Sans']">
                      Catagory
                    </Link>
                  </div>
                  <div className=" bg-white rounded-[20px] border-2 border-rose-400 px-2 flex justify-between place-items-center">
                    <input
                      type="text"
                      className="rounded px-2 focus:outline-none text-[15px] py-1 text-rose-400"
                      placeholder="Search"
                      name="search"
                      onChange={AddValue}
                    />
                    <button className="text-rose-400" onClick={HandleForm}>
                      <FaSearch />
                    </button>
                  </div>
              </div>
              {!admin.email ?
                <>
                  <div className="rightSite flex justify-between place-items-center gap-8">
                    <div className="div flex justify-between gap-3">
                      <span className="text-rose-400" onClick={Cart}>
                        <DetailsBox value={cartList.length} />
                        <FaShoppingBag />
                      </span>
                      <span className="text-rose-400" onClick={wishList}>
                        <DetailsBox value={wishlist.length} />
                        <FaRegHeart />
                      </span>
                      <Link className="text-rose-400" to="/login">
                        <FaUser />
                      </Link>
                    </div>
                    <div className="button">
                      <Link className="px-3 py-1 bg-rose-400 text-white rounded text-sm" to="/contect">
                        Contect
                      </Link>
                    </div>
                  </div>
                </> : <></>}
              </div>
            </>
          ) : (
            <>
              <div
                className=" z-20 w-full h-[56px] bg-white flex justify-between px-10 place-items-center shadow-md"
                ref={myRef}
              >
                <div className="">
                  <span className="nav-brand text-rose-400 text-4xl font-normal font-['Inspiration']">
                    Mim
                  </span>
                  <span className="text-black text-[15px] font-normal font-['Inspiration']">
                    {" "}
                    Fashion
                  </span>
                </div>
                <div className=" bg-white rounded-[20px] border-2 border-rose-400 px-1 flex justify-between place-items-center">
                  <input
                    type="text"
                    className="rounded px-2 focus:outline-none text-[10px] py-1  text-rose-400"
                    placeholder="Search"
                    onInput={AddValue}
                  />
                  <button className="text-rose-400" onClick={HandleForm}>
                    <FaSearch />
                  </button>
                </div>
                <span className="text-rose-400" onClick={Cart}>
                  <DetailsBox value={cartList.length} />
                  <FaShoppingBag />
                </span>
              </div>
              <div className="navBottom w-full  bg-white z-10 bottom-0 shadow fixed p-1 py-2 sale flex justify-around ">
                <Link className="text-rose-400 flex flex-col justify-center place-items-center gap-1">
                  <span className="text-2xl">
                    <FaHome />
                  </span>
                  <span className="">Home</span>
                </Link>
                <Link
                  className="text-rose-400 flex flex-col justify-center place-items-center gap-1"
                  to="/store"
                  onClick={Store}
                >
                  <span className="text-2xl">
                    <FaStore />
                  </span>
                  <span>Store</span>
                </Link>
                <Link
                  className="text-rose-400 flex flex-col justify-center place-items-center gap-1"
                  onClick={wishList}
                  to="store"
                >
                  <span className="text-2xl">
                
                    <FaRegHeart />
                  </span>
                  <span>Wishlist</span>
                </Link>
                <Link
                  to="/login"
                  className="text-rose-400 flex flex-col justify-center place-items-center gap-1 "
                >
                  <span className="text-2xl">
                    <FaUser />
                  </span>
                  <span>Profile</span>
                </Link>
              </div>
            </>
          )}
        </> 
        
     
      </>
  );
}
