import React, { useEffect } from 'react'
import { FaCreditCard } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { TempOrder, getOrders } from '../../../../../Store/Slices/StoreSlice';

export default function OrderBox(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const order = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user);
  const userOrder = order.filter((data) => data.order.userId === user._id);
  
  function Show()
  {
    const products = userOrder?.map((data) => {
      const order = data?.order;
      const product = order?.products;
      const status = props?.status?props.status:"pending"
      const arr = product?.map((dat) => {
        if (dat.status ===status ) {
          return dat;
        }
      });
      const products = arr
      const un = products?.filter(data=>data!==undefined)
      
     
      if (un?.length) {
        return {
          ...data,
          order: {
            ...order,
            products:un
          }
        }
      }
    });
    dispatch(TempOrder(products))
    
    props.handle({
      name: props?.text,
      container: [],
      state: "pending",
      orders:[]
    })
  }
  return (
    <div className='sale flex justify-center place-items-center flex-col p-3 bg-white shadow-md rounded-md lg:shadow-lg gap-2  text-rose-400 hover:-translate-y-3 transition duration-150 cursor-pointer' onClick={Show}>
          <div className="icon lg:text-3xl">
              {props?.icon}
          </div>
          <div className="text lg:text-base text-[10px] text-center">
              {props?.text}
          </div>
    </div>
  )
}
