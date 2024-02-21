import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard/OrderCard'
import DateBox from './DateBox/DateBox';
import Loader from '../../../../../Loader/Loader';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import OrderNotFound from '../../../../../NotFound/OrderNotFound';

export default function ShowProduct({ data }) {
    const [isLoading, setIsLoading] = useState(true)
  const order = useSelector(state => state.tempOrder)
  console.log(order);
    const orders = data.orders
    const [exist, SetExist] = useState(false)
    const fil = order?.filter(data=>data!==undefined)
    const orderArr = fil?.map(data => {
        return <DateBox date={data} key={data?._id} id={data?._id} pack={fil} />
    })
   
    useEffect(() => {
        setIsLoading(prev => {
            return orders !== undefined? false :true
        })
        SetExist(prev => {
            return fil?.length ?true:false
        })
    },[orders,fil])
  return (
    <motion.div className="p-3 ">
      <div className="header text-xl text-rose-400">{data?.name} Products</div>
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="productContainer lg:p-3 grid grid-cols-1 gap-3 ">
          {exist ? <>{orderArr} </> : <OrderNotFound />}
        </div>
      )}
    </motion.div>
  );
}
