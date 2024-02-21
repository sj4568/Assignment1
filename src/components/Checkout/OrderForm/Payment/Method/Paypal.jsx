import React, { useState } from 'react'
import PayCard from '../../../PayCard/PayCard';
import { FaPaypal } from 'react-icons/fa';
import InputElement from '../../../../InputElement/InputElement';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Paypal({ sendData }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    method: "",
    tr_num:""
  })
  function AddValue(e)
  {
    const { name, value } = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]:value
      }
    })
  }
  function HandleSubmit()
  {
    const { method, tr_num } = formData
    if (method && tr_num)
    {
      const obj = {
        type: "Paypal",
        ...formData
      }
      sendData(obj)
      navigate("/completeorder")
    }
    else
    {
      toast.error("Fill all data", {
        position:"top-center"
      })
      }
    

  }
  return (
    <PayCard
      icon={<FaPaypal />}
      title="Paypal"
      des={
        <>
          <InputElement
            label="Paypal Address"
            placeholder="Paypal Address"
            id="title"
            type="email"
            onChange={AddValue}
            name="method"
          />
          <InputElement
            label="Transiction Number"
            placeholder="Transiction Number"
            id="tr_num"
            name="tr_num"
            onChange={AddValue}
          />
          <div className="button text-center py-3">
            <button className="bg-rose-500 text-white text-sm px-4 py-1 rounded-sm" onClick={HandleSubmit}>
              Place Order
            </button>
          </div>
        </>
      }
    />
  );
}
