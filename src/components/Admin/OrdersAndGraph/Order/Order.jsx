import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'
import StatusBox from '../../AdminSdebar/MenuBar/StatusBox/StatusBox';
import OrderBox from './OrderBox/OrderBox';
import { useSelector } from 'react-redux';

export default function Order() {
  const orders = useSelector(state => state.t_order)
  const orderArr = orders?.map((data,index) => {
    return <OrderBox data={data.order} index={index+1} key={index}/>
  })
  return (
    <div>
      <div className="header text-2xl font-semibold py-2 bg-rose-400 p-3 text-white mb-3">
        Recent Orders
      </div>
      <table className="table w-full table-hover">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Products</th>
          <th>Net Price</th>
          <th>status</th>
          <th> action</th>
        </tr>
        {orderArr}
      </table>
    </div>
  );
}
