import React from "react";
import CartCard from "./CartCard/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShowCart } from "../Store/Slices/StoreSlice";

export default function Cart() {
  const dispatch = useDispatch()
  const showcart = useSelector((state) => state.showCart);
  let show = showcart ? "" : "hidden";
  const clas = `bg-white h-[300px] lg:w-[400px] md:w-[400px] w-[90%] shadow fixed z-10 lg:right-[50px] md:right-[30px] right-[10px] rounded-md mt-[60px]  p-2 overflow-y-hidden scrollbar-none ${show}`;
  const data = useSelector((state) => state.Cart);
  const CartItem = data?.map((dat) => {
    return (
      <CartCard
        _id={dat._id}
        img={dat.img}
        name={dat.name}
        type={dat.type}
        price={dat.price}
        amount={dat.amount}
        key={dat._id}
      />
    );
  });
  function CloseCart()
  {
    dispatch(ShowCart())
  }
  return (
    <motion.div
      layout
      transition={4}
      initial={{ top: 10 }}
      exit={{ top: 10 }}
      className={clas}
    >
      <div className="header px-3 py-1 text-lg font-bold bg-rose-400 text-white">
        Cart
      </div>
      <div className="cardContainer mt-2 flex flex-col gap-2 overflow-y-auto absolute h-full w-full">
        {CartItem}
      </div>

      <div className="button absolute bottom-0 p-3 flex gap-3">
        {data?.length ==0 ? (
          <Link className="bg-blue-400 p-2 rounded-sm text-white text-xs">
            Continue Shopping
          </Link>
        ) : (
          <>
            <Link onClick={CloseCart}  to="/checkout" className="bg-blue-600 p-2 rounded-sm text-white text-xs">
              Show Cart
            </Link>
            <Link onClick={CloseCart}  to="/checkout" className="bg-red-400 p-2 rounded-sm text-white text-xs">
              Checkout
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
}
