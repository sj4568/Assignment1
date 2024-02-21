import React, { useEffect, useState } from 'react'
import OrderBox from './OrderBox/OrderBox'
import { FaCreditCard, FaPenAlt, FaThinkPeaks, FaTruckLoading, FaTruckMoving } from 'react-icons/fa';
import ShowProduct from './ShowProduct/ShowProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../../Store/Slices/StoreSlice';

export default function OrderContainer() {
  
  const [data, setData] = useState({
    name: "",
    container: [],
    state:"pending",
    orders:[]
  })
  
  function obj(obj) {
    setData(obj)
  }
  return (
    <div className="p-3 sale">
      <header className="p-3 lg:text-4xl  text-xl uppercase font-bold text-rose-400">
        MY Orders
      </header>
      <div className="order-container p-3 grid grid-cols-4 gap-3">
        <OrderBox icon={ <FaCreditCard/> } text="To Pay" handle={obj} status="pending"/>
        <OrderBox icon={<FaTruckMoving />} text="To Shipping" handle={obj} status="shipping"/>
        <OrderBox icon={<FaTruckLoading/>} text="Deliverd" handle={obj} status="deliverd"/>
        <OrderBox icon={<FaPenAlt/>} text="To Review" handle={obj}  status="review"/>
      </div>
      <ShowProduct data={data} />
    </div>
  );
}
