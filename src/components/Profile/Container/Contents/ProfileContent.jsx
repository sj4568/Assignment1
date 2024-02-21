import React, { useEffect, useState } from 'react'
import FormInput from '../../../User/LoginOrSignUp/FormInput/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../../../Store/Slices/StoreSlice';
import { toast } from 'react-toastify';

export default function ProfileContent() {
    const user = useSelector(state=>state.user)
  const [formdata, setFormData] = useState({
    name:user?.name,
    email:user?.email,
    phone:user?.phone+"",
   
    
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
  const [err, setErr] = useState("");
  const [color, setColor] = useState("");
  const [data, setData] = useState([]);
const dispatch = useDispatch()
  function HandleSubmit(e) {
    e.preventDefault();
    

    const { name, phone, email } = formdata;
    if (name && phone && email) {
      
       
        
        dispatch(UpdateUser({
          ...user,
          ...formdata
        }))
        toast.success("Update Successfully", {
          position: "top-center",
        });
        setColor("green");
       
    } else {
      setColor("red");
      setErr("Fill all data");
    }
  }
  
  const clas = `lg:w-[50%] px-7 sale`;
  return (
    <div className={clas}>
          <div className=" uppercase font-semibold text-2xl text-rose-400 my-4">
              Peofile Information
      </div>
      
        <FormInput
          label="Full Name"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={AddValue}
          value={formdata.name}
        />
        <FormInput
          label="Email Address"
          name="email"
          id="email"
          placeholder="Email Address"
          type="email"
          onChange={AddValue}
          value={formdata.email}
        />
        <FormInput
          label="Phone Number"
          name="phone"
        id="phone"
        type="text"
          placeholder="Phone Number"
          value={formdata.phone}
          onChange={AddValue}
        />
      
        
        <span
          className="text-center py-1 w-full flex justify-center"
          style={{ color: color }}
        >
          {err}
        </span>
        <div className="button w-full text-center mt-3">
          <button
            className="bg-rose-400 rounded-sm shadow-md w-[60%] py-2 text-white"
            onClick={HandleSubmit}
          >
            Update
          </button>
         
        </div>
      </div>
    
  );
}
