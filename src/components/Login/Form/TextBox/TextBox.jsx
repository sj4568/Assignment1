import React, { useState } from "react";
import InputElement from "../../../InputElement/InputElement";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { SetL } from "../../../Helpers/LocalStateManager";
import { useDispatch } from "react-redux";
import { TakeUser } from "../../../Store/Slices/Slices";
import { PORT } from "../../../../Page/Data";

export default function TextBox() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [UserData, setUserData] = useState({
    email: "",
    pass1: "",
  });
  const [validation, SetValidation] = useState({
    email: "",
    pass1: "",
  });

  const [img, setImg] = useState("");
  function AddValue(e) {
    const { name, value, files } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function HandleSubmit(e) {
    e.preventDefault();
    const { pass1, email } = UserData;
    if (pass1 && email) {
      axios
        .post(`${PORT}/auth/login`, {
          ...UserData,
          password: pass1,
        })
        .then((data) => {
          if (data.data.status == "success") {
            toast.success(data.data.massage, {
              position: "top-center",
            });
            dispatch(
              TakeUser({
                ...data.data.user,
                token: data.data.token,
              })
            );
            setUserData({
              email: "",
              pass1: "",
            });
            navigate("/")
          } else {
            toast.error(data.data.massage, {
              position: "top-center",
            });
          }
        });

      SetValidation({});
    } else {
      if (!email) {
        SetValidation((prev) => {
          return {
            ...prev,
            email: true,
          };
        });
      }

      if (!pass1) {
        SetValidation((prev) => {
          return {
            ...prev,
            pass1: true,
          };
        });
      }
    }
  }
  return (
    <form className="w-[80%]" onSubmit={HandleSubmit}>
      <InputElement
        label="Email Address *"
        type="email"
        id="email"
        name="email"
        massage={validation.email}
        value={UserData.email}
        onChange={AddValue}
      />
      <InputElement
        label="Password *"
        type="password"
        id="pass1"
        name="pass1"
        massage={validation.pass1}
        value={UserData.pass1}
        onChange={AddValue}
      />

      <div className="pt-2">
        <button
          className={`w-full border-none py-1 px-2 text-sm 
             bg-orange-500 rounded-sm text-white font-bold`}
        >
          Login
        </button>
      </div>
      <span className="text-slate-400 text-sm text-center">
        You have no account{" "}
        <Link to="/" className="text-orange-600">
          Resister Here
        </Link>
      </span>
    </form>
  );
}
