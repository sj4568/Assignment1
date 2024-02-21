import React from 'react'
import { FaCreditCard, FaHandHoldingUsd, FaPaypal } from 'react-icons/fa';
import InputElement from '../../../InputElement/InputElement';
import PayCard from '../../PayCard/PayCard';
import Paypal from './Method/Paypal';
import Card from './Method/Card';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ClearCart } from '../../../Store/Slices/StoreSlice';
import { data } from 'autoprefixer';
import { useNavigate } from 'react-router-dom';

export default function Payment({ state, cartData, address }) {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  function HandleSubmit(obj)
  {
    const arr = cartData?.map(data => {
      return {
        ...data,
        status:"pending"
      }
    })
    fetch(`https://mim-super-shop-backend-6.onrender.com/api/createorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
        method: obj,
        products: arr,
        netPrice: state,
        address,
        date: new Date().toDateString().split(" ").join("_"),
      }),
    });
    dispatch(ClearCart())
    toast.success("Order placed successfully", {
      position: "top-center",
    });
  }
  function COD()
  {
    HandleSubmit({
      type:"COD"
    })
    navigate("/completeorder")
  }
  return (
    <div className="payments py-2">
      <div className="font-bold text-sm">Payment Method</div>
      <div className="payment my-2">
        <Paypal sendData={HandleSubmit} />
        <Card sendData={HandleSubmit} />
        <PayCard
          icon={<FaHandHoldingUsd />}
          title="Cash On Delivary"
          des={
            <>
              <div className="button text-center py-3">
                <button className="bg-rose-500 text-white text-sm px-4 py-1 rounded-sm" onClick={COD}>
                  Place Order
                </button>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
