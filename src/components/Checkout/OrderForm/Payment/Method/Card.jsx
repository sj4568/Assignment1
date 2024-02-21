import React, { useState } from 'react'
import { FaCreditCard } from 'react-icons/fa';
import PayCard from '../../../PayCard/PayCard';
import InputElement from '../../../../InputElement/InputElement';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Card({ sendData }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    number: "",
    date: "",
    code: 0,
    Name:""
  });
  function AddValue(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function HandleSubmit() {
    const { number,date,Name,code } = formData;
    if (number && date && Name && code) {
      const obj = {
        type: "Card",
        ...formData,
      };
      sendData(obj);
      navigate("/completeorder")
    } else {
      toast.error("Fill all data", {
        position: "top-center",
      });
   
    }
  }
  return (
    <PayCard
      icon={<FaCreditCard />}
      title="Card Payment"
      des={
        <>
          <InputElement
            label="Card Number"
            placeholder="Card Number"
            id="card_number"
            type="number"
            name="number"
            onChange={AddValue}
          />
          <div className="flex justify-between gap-3">
            <InputElement
              label="Exapiration Date"
              placeholder=""
              id="Edate"
              type="date"
              name="date"
              onChange={AddValue}
            />
            <InputElement
              label="CVC Code"
              placeholder="CVC Code"
              id="card_number"
              type="number"
              name="code"
              onChange={AddValue}
            />
          </div>
          <InputElement
            label="Card Owener Name"
            placeholder="Card Owener Name"
            name="Name"
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
