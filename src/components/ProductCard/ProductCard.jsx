import React, { useCallback, useEffect, useRef, useState } from "react";
import img from "../../assets/shopping/Banner/lady4.jpg"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate} from "react-router-dom"
import { AddWishList, RemoveFromWishList, saveTempPro } from "../Store/Slices/StoreSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function ProductCard(prop) {
  
  const data = useSelector(state => state.wishList)

  
  const props = prop.data
  const found = data.some((dat) => dat?.id === props?.id);
  const status=found?true:false
  const [isWish, setIsWish] = useState(status);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function SaveTemp()
  {
    dispatch(saveTempPro(props))
    navigate("/showbox")
  }
  function SetWishList()
  {
    const found = data.some(dat => dat?.id === props.id)
    if (found)
    {
      toast.error(`Item remove from wishlist`, {
        position: "top-center",
      });
      dispatch(RemoveFromWishList(props))
    }
    else
    {
      toast.success(`Item add in wishlist`, {
        position:"top-center"
      })
      const arr =[...data,props]
      dispatch(AddWishList(arr))
    }
    
    
    setIsWish(prev=>!prev)
  }
  
 
  return (
    <motion.div layout initial={{opacity:0,top:20,scale:0.3}} animate={{opacity:1,scale:1}} transition={2*props?.index} className="product-card flex flex-col gap-2  w-full p-1 lg:p-3 md:p-3">
      <div className="img w-full lg:h-[250px] h-[300px] xs:h-[200px] relative bg-red-400">
        <img
          src={props?.img}
          alt=""
          className="object-cover absolute w-full h-full"
        />
      </div>
      <div className="textBox px-2">
        <div className=" text-black text-lg xs:text-sm font-semibold sale">
          {props?.name}
        </div>
        <div className=" text-black text-sm xs:text-[12px] font-normal sale">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="flex gap-2 text-sm xs:text-[10px]">
          <span className="text-black  font-bold sale">${props?.price} </span>
          <span className="text-slate-400  font-bold sale line-through ">
            $5.90{" "}
          </span>
          <span className="text-rose-400  font-bold sale">(60% OFF)</span>
        </div>
        <div className="buttpn mt-2 flex gap-2">
          <button
            className=" px-2 bg-rose-400 text-white font-tight text-sm xs:text-[10px] w-full lg:py-2 rounded-sm"
            onClick={SaveTemp}
          >
            Add To Cart
          </button>
          <button
            className="px-2 py-1 border-1 border-rose-400 text-rose-400 font-bold text-lg xs:text-[10px] w-[30%] flex justify-center place-items-center rounded-sm"
            onClick={SetWishList}
          >
            {!isWish ? <FaRegHeart /> : <FaHeart />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default React.memo(ProductCard)