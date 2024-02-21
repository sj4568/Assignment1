import React, { useState } from 'react'
import PayCard from '../PayCard/PayCard';
import { FaCreditCard, FaHandHoldingUsd, FaPaypal } from 'react-icons/fa';
import InputElement from '../../InputElement/InputElement';
import Payment from './Payment/Payment';
import { useSelector } from 'react-redux';
import AddressContainer from './AddressContainer/AddressContainer';

export default function OrderForm() {
  const data = useSelector(state => state.Cart)
  let price = 0
  
  for (let i of data)
  {
    price+=parseInt(i.amount)*i.price
  }
  const [state, setState] = useState(price);
  const [charge, setCharge] = useState(0)
  function AddCharge(e)
  {
    setCharge(e.target.value)
    setState(price+parseInt(e.target.value))
  }
  const [address, setAddress] = useState("")
  function GetAddress(obj)
  {
    setAddress(obj)
    
  }
  return (
    <div className="lg:w-[50%] bg-gray-100 p-4 sale">
      <div className="text-xl font-bold"> Order Summary</div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <div className="text-sm font-bold">Itms { data.length}</div>
        <div className="text-sm font-bold">${state}</div>
      </div>
      <AddressContainer getAddress={GetAddress } />
      <div className="flex flex-col gap-2 my-2">
        <label htmlFor="del" className="text-sm font-bold">
          Shipping
        </label>
        <select
          name="del"
          id="del"
          onChange={AddCharge}
          className="form-select rounded-none text-sm active:shadow-none focus:shadow-none"
        >
          <option value={5}>Standerd Delivary $5</option>
          <option value={10}>Advenced Delivary $10</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 my-2">
        <label htmlFor="del" className="text-sm font-bold">
          Promo Code
        </label>
        <input
          type="text"
          className="py-2 px-3 border text-sm"
          placeholder="Enter your code"
        />
      </div>
      <div>
        <button className="bg-rose-500 py-1 text-sm  text-white px-3 rounded-sm">
          Apply
        </button>
      </div>
      <Payment state={state } cartData={data} address={address}  />
    </div>
  );
}
