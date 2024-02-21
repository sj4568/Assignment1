import React from "react";
import img from "../../../../assets/products/shoe1.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RemoveItemFromCart, UpdateAmount } from "../../../Store/Slices/StoreSlice";
import { motion } from "framer-motion";
export default function ShowCard(prop) {
    const dispatch = useDispatch()
  const props = prop.props;
  const [amount, SetAmount] = useState(parseInt(props?.amount));

  function AddValue(e) {
    SetAmount((prev) => e.target.value);
  }
  function amountUpdate(value) {
    SetAmount((prev) => {
      if (value) {
        return prev + 1;
      } else {
        return prev - 1;
      }
    });
  }
  function saveAmount()
  {
    if (amount>0)
    {
      const obj = {
        ...props,
        amount:amount
      }
      dispatch(UpdateAmount(obj))
    }
    
  }
  return (
    <motion.div layout className="cart-title flex justify-between place-items-center " onClick={saveAmount}>
      <div className="pro-details flex  w-full  gap-2  ">
        <div className="imgbox lg:w-[100%] md:w-[40%]  h-full relative">
          <img
            src={props.img}
            className="  lg:w-full h-full object-cover"
          />
        </div>
        <div className="textBox w-[100%] h-full">
          <h1 className="font-bold text-[10px] lg:text-sm">{props.name}</h1>
          <p className="text-[10px] lg:text-[12px] hidden lg:block md:block">This is for {props.type}</p>
        </div>
      </div>
      <div className="quantity w-full flex justify-center">
        <div className="w-full h-full flex justify-center place-items-center gap-1">
          <button
            className="text-lg px-2"
            onClick={() => {
              amountUpdate(false);
            }}
          >
            -
          </button>
          <input
            type="number"
            className="w-[30%] border text-center"
            value={amount}
            onChange={AddValue}
          />
          <button
            className="text-lg px-2"
            onClick={() => {
              amountUpdate(true);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="netPrice w-full text-center  text-[13px] hidden lg:block md:block">${props.price}</div>
      <div className="total w-full text-center text-[13px]">${amount * props?.price}</div>
      <div className="remove w-full text-center text-[13px]">
              <button className="bg-gray-300 px-3"
                  onClick={() => {
                  dispatch(RemoveItemFromCart(props))
              }}
              >X</button>
      </div>
    </motion.div>
  );
}
