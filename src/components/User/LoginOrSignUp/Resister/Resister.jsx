import React, { useEffect, useState } from 'react'
import InputElement from '../../../InputElement/InputElement'
import FormInput from '../FormInput/FormInput'
import { json } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import UploadImage from '../../../Upload/UploadImage'

export default function Resister(props) {
  const dispatch = useDispatch()
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pass: "",
    pass2: "",
   
    
  })
  const [image,setImg]=useState("")
  const [deleteUrl,SetDeleteUrl]=useState("")
  function AddValue(e) {
    const { name, value, files } = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
    const form = new FormData();
       form.set("image", files && files[0]);
       form.set("key", "55d07bcbfea93bd44662af25d0776cad");
       axios
         .post("https://api.imgbb.com/1/upload", form)
         .then((dat) => {
           const data = dat.data
           SetDeleteUrl(data?.data?.delete_url)

           setImg(data?.data?.display_url)
         
         })
  }
  const [err, setErr] = useState("")
  const [color, setColor] = useState("")
const data = useSelector(state=>state.users)
  function HandleSubmit(e)
  {
    e.preventDefault()
  
    const found = data.some(dat => dat.email === formdata.email)
    
    const { name, phone, email, pass, pass2, address} = formdata
    if (name && phone && email && pass && pass2 && address ) {
      if (pass === pass2) {
        if (!found) {
          fetch(
            "https://mim-super-shop-backend-6.onrender.com/api/createuser",
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({
                ...formdata,
                img: image,
                address: [formdata.address],
              }),
            }
          );
          setFormData(prev => {
            return {
              name: "",
              address: "",
              email: "",
              pass: "",
              pass2: "",
              phone: "",
              img:""
            }
            SetDeleteUrl("")
          })
          toast.success("Resister Successfull", {
            position:"top-center"
          })
          setColor("green")
          props.handle()
        }
        else
        {
          setColor("red")
          setErr("Account already exist")
          }
      }
      else
      {
        setColor("red")
        setErr("Password are not match")
        }
    } else
    {
      setColor("red")
      setErr("Fill all data")
      }
  }
  const state = props.state ? "" : "hidden"
  const clas = `lg:w-[50%] px-7 sale lg:block md:block ${state}`;
  return (
    <div className={clas}>
      <div className="lg:px-8 uppercase font-semibold text-2xl text-rose-400 my-4">
        Resister
      </div>
      <div className=" lg:px-10" onSubmit={HandleSubmit}>
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
          label="Profile Picture"
          type="file"
          name="img"
          onChange={AddValue}
        />
        <FormInput
          label="Phone Number"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={formdata.phone}
          onChange={AddValue}
        />
        <FormInput
          label="Address"
          name="address"
          id="address"
          placeholder="Address"
          value={formdata.address}
          onChange={AddValue}
        />
        <FormInput
          label="Password"
          name="pass"
          id="password"
          placeholder="Password"
          value={formdata.pass}
          onChange={AddValue}
          type="password"
        />
        <FormInput
          label="Comfirm Password"
          name="pass2"
          id="pass2"
          placeholder="Password"
          value={formdata.pass2}
          type="password"
          onChange={AddValue}
        />
        <span className='text-center py-1 w-full flex justify-center' style={{color:color}}>{err}</span>
        <div className="button w-full text-center mt-3">
          <button className="bg-rose-400 rounded-sm shadow-md w-[60%] py-2 text-white" onClick={HandleSubmit}>
            Resister
          </button>
          <div className="link py-2 text-sm text-slate-400 flex justify-center gap-2">
            If have already a account{" "}
            <button
              className="text-rose-400 hidden lg:block md:block"
              onClick={() => {
                props.handle();
              }}
            >
              Log in Here
            </button>
            <button
              className="text-green-400 lg:hidden md:hidden inline-block"
              onClick={() => {
                props.Show();
              }}
            >
              Log in Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
