import React from 'react'
import ShowCard from './ShowCard/ShowCard';
import { useSelector } from 'react-redux';

export default function ShowCart() {
    const cartData = useSelector(state => state.Cart)
    
    const arr = cartData?.map(data => {
       return <ShowCard props={data}/>
    })
  return (
    <div className="sale w-full p-3">
      <div className="header flex justify-between pb-6">
        <div className="text-xl font-bold">Shopping Cart</div>
        <div className="items text-xl font-bold">{cartData.length} Items</div>
      </div>
      <hr className="pb-3" />
      <div className="lg:px-4 flex flex-col gap-3">
        <div className="cart-title flex justify-between">
          <div className="pro-details lg:w-full w-full text-[13px]">Product Details</div>
          <div className="quantity w-full text-[13px]  text-center">
            Quantity
          </div>
          <div className="netPrice w-full text-center text-[13px] hidden lg:block md:block">Price</div>
          <div className="total w-full text-center text-[13px]">Total</div>
          <div className="remove w-full text-center text-[13px]">Action</div>
        </div>
        {arr}
      </div>
    </div>
  );
}
