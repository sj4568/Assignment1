import React from 'react'
import img from "../../../assets/products/shoe2.jpg"
import { useDispatch } from 'react-redux';
import { RemoveItemFromCart } from '../../Store/Slices/StoreSlice';
import { motion } from 'framer-motion';

export default function CartCard(props) {
    const dispatch = useDispatch()
    function RemoveCartItem()
    {
        dispatch(RemoveItemFromCart(props))
    }
  return (
    <motion.div layout transition={4} initial={{marginTop:5,opacity:0}} exit={{opacity:0}} animate={{opacity:1}} className="flex justify-between h-[40px] place-items-center sale">
      <div className='w-[100%] h-full flex place-items-center gap-2'>
        <div className="imgBox h-full">
          <img src={props?.img} alt="" className='h-full w-[70px] object-cover' />
        </div>
        <div className="details flex flex-col py-3">
                  <div className="name text-sm">{ props?.name}</div>
                  <div className="title p-0 m-0 text-xs">For { props.type}</div>
        </div>
      </div>
          <div className="price w-[40%] text-sm">{props?.amount}x${props?.price }</div>
      <div className="cancel w-[20%]">
        <button className=' bg-slate-100 px-2 ' onClick={RemoveCartItem}>X</button>
      </div>
    </motion.div>
  );
}
