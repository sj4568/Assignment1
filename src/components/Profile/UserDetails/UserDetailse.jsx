import React, { useState } from "react";
import InputElement from "../../InputElement/InputElement";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORT } from "../../../Page/Data";
import { TakeUser } from "../../Store/Slices/Slices";
import { toast } from "react-toastify";
import avatar from "../../../assets/Avatar/avatar.png"
export default function UserDetailse() {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [data, setData] = useState({
    name: user?.name,
    username: user?.name,
    email: user?.email,
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
    const { name, username, email } = data;
    dispatch(TakeUser({ ...user, ...data }));
    if (email && username && name) {
      axios
        .put(`${PORT}/auth/update/${user._id}`, { ...user, ...data })
        .then((data) => {
          if (data.data.status == "success") {
            toast.success(data.data.massage, {
              position: "top-center",
            });
          }
        });
    }
  }
  return (
    <div className="bg-white p-4 w-[400px] rounded-md">
      <div className="title p-4 text-center flex justify-center text-4xl text-orange-600">
        <img src={user?.img?user.img:avatar} alt="" className="w-[100px] h-[100px] object-cover rounded-full" />
      </div>
      <InputElement
        label="Full Name"
        name="name"
        id="name"
        value={data.name}
        onChange={AddValue}
      />
      <InputElement
        label="User Name"
        name="username"
        id="username"
        value={data.username}
        onChange={AddValue}
      />
      <InputElement
        label="Email Address"
        name="email"
        id="email"
        value={data.email}
        onChange={AddValue}
      />
      <button
        className="mt-4 px-3 py-1 w-full bg-orange-600 text-white"
        onClick={SubmitData}
      >
        Update Details
      </button>
          <div onClick={() => { navigate(`/profile/change`) }} className="p-2 w-full flex justify-center text-orange-600">
        Change Password
          </div>
          <div className="py-1 text-center">
              <button className="px-2 py-1 bg-orange-600 text-white" onClick={() => {
                  dispatch(TakeUser({}))
                  toast.success("Logout successfull", {
                      position:"top-center"
                  })
                  navigate("/")
              }}> Log Out</button>
          </div>
    </div>
  );
}
