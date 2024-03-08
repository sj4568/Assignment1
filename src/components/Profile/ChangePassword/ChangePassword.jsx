import React, { useState } from "react";
import InputElement from "../../InputElement/InputElement";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORT } from "../../../Page/Data";
import { TakeUser } from "../../Store/Slices/Slices";
import { toast } from "react-toastify";

export default function ChnagePassword() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [data, setData] = useState({
    oldpass:"" ,
    pass1:"" ,
    pass2: "",
  });
  function AddValue(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function SubmitData() {
    const { oldpass,pass1,pass2 } = data;
    ;
      if (oldpass && pass1 && pass2) {
          if (pass1 == pass2) {
              
            
              axios
                  .put(`${PORT}/auth/update/${user._id}`, { password:oldpass,newPassword:pass1 })
                  .then((data) => {
                      if (data.data.status == "success") {
                          toast.success(data.data.massage, {
                              position: "top-center",
                          });
                      } else {
                          toast.error(data.data.massage, {
                            position: "top-center",
                          });
                      }
                  });
          } else
          {
              toast.error("password to match", {
                  position:"top-center"
              })
          }
          
      }
      else {
          toast.error("Fill all field", {
            position: "top-center",
          });
      }
  }
  return (
    <div className="bg-white p-4 w-[400px] rounded-md">
      <div className="title p-4 text-center text-4xl text-orange-600">
        Change Password
      </div>
      <InputElement
        label="Current Password"
        name="oldpass"
        id="oldpass"
        value={data.oldpass}
        onChange={AddValue}
        type="password"
      />
      <InputElement
        label="New Password"
        name="pass1"
        id="pass1"
        value={data.pass1}
        onChange={AddValue}
        type="password"
      />
      <InputElement
        label="Cofirmed Password"
        name="pass2"
        id="pass2"
        value={data.pass2}
        onChange={AddValue}
        type="password"
      />
      <button
        className="mt-4 px-3 py-1 w-full bg-orange-600 text-white"
        onClick={SubmitData}
      >
        Change Password
      </button>
          <Link className="p-2 w-full flex justify-center text-orange-600" onClick={() => {
              toast.success("Password Reset mail send in in your email",
                  {
                  position:"top-center"
              })
      }}>
        Forget Password
      </Link>
    </div>
  );
}
