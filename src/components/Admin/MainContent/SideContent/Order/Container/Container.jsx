import React from "react";

import { FaMoneyBill, FaShippingFast, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import Content from "../../Dashboard/Container/Content/Content";
import { FaTruckDroplet } from "react-icons/fa6";

export default function Container({handle}) {
   const orders = useSelector((state) => state.orders);

   const pending = orders?.filter((data) => {
     const products = data?.order?.products;
     const state = products?.some((dat) => dat.status == "pending");
     if (state) {
       return data;
     }
   });
    const shipping = orders?.filter((data) => {
      const products = data?.order?.products;
      const state = products?.some((dat) => dat.status == "shipping");
      if (state) {
        return data;
      }
    });
    const deliverd = orders?.filter((data) => {
      const products = data?.order?.products;
      const state = products?.some((dat) => dat.status == "deliverd");
      if (state) {
        return data;
      }
    });
    
  return (
    <div className="flex justify-around place-items-center gap-3 w-full lg:flex-row flex-col">
      <Content
        icon={<FaMoneyBill />}
        type={"Pending Products"}
        amount={pending.length}
        des={"Products whos are pendings"}
        Bg={`bg-rose-400`}
        Ibg={`bg-rose-600`}
        text={"pending"}
        CallBack={handle}
      />
      <Content
        icon={<FaShippingFast />}
        type={"Shipping Products"}
        amount={shipping.length}
        des={"Shipping Products"}
        Bg={`bg-red-200`}
        Ibg={`bg-pink-300`}
        text={"shipping"}
        CallBack={handle}
      />
      <Content
        icon={<FaTruckDroplet />}
        type={"Deliverd Products"}
        amount={deliverd.length}
        des={"id,username, email etc"}
        Bg={`bg-emerald-400`}
        Ibg={`bg-gray-600`}
        text={"deliverd"}
        CallBack={handle}
      />
    </div>
  );
}
