import React, { useEffect, useState } from "react";
import FormInput from "../../User/LoginOrSignUp/FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { AddAdmin } from "../../Store/Slices/StoreSlice";

export default function AdminLogin(props) {
  const data = useSelector((state) => state.users);
  const [formdata, setFormData] = useState({
    email: "",
    pass: "",
  });
  const dispatch = useDispatch();
  function Addvalue(e) {
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
  function HandleSignIn() {
    
   
      if (formdata.email==='masom3456@gmail.com' && formdata.pass==='MasomRana456') {
        dispatch(AddAdmin(formdata));
        toast.success("Log in Successfully");
        setErr("Log in Successfully");
        setColor("green");
      } else {
        setErr("Something is wrong");
        setColor("red");
      }
  
  }
  const show = props.show === false ? "hidden" : "flex";
  const clas = `w-full lg:px-7 py-2 sale flex justify-center place-items-center`;
  return (
    <div className={clas}>
      <div className="lg:w-[80%] w-full">
        <div className="px-8 uppercase font-semibold text-2xl text-rose-400 my-4">
          Login
        </div>
        <div className=" px-10">
          <FormInput
            label="Email Address"
            name="email"
            id="email"
            placeholder="Email Address"
            type="email"
            onChange={Addvalue}
            value={formdata.email}
          />

          <FormInput
            label="Password"
            name="pass"
            id="password"
            type="password"
            placeholder="Password"
            onChange={Addvalue}
            value={formdata.pass}
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
              onClick={HandleSignIn}
            >
              Login
            </button>
            <div className="link py-2 text-sm text-slate-400 flex justify-center gap-2">
              If you have no account{" "}
             
              <button
                className="text-rose-400 lg:hidden md:hidden"
                onClick={() => {
                  props.Show();
                }}
              >
                You should take permission first
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
