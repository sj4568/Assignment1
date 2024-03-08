import React, { useState } from "react";
import InputElement from "../../../InputElement/InputElement";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TakeUser } from "../../../Store/Slices/Slices";
import { PORT } from "../../../../Page/Data";

export default function TextBox() {
    const dispatch = useDispatch()
  const [UserData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    pass1: "",
    pass2: "",
  });
  const [validation, SetValidation] = useState({
    name: "",
    username: "",
    email: "",
    pass1: "",
    pass2: "",
  });
  const [img,setImg]=useState("")
  const [checked, setChecked] = useState(false);
  
  function AddValue(e) {
    const { name, value, files } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
     const form = new FormData();
     console.log(files[0]);
     form.set("image", files && files[0]);
     form.set("key", "55d07bcbfea93bd44662af25d0776cad");
     axios.post("https://api.imgbb.com/1/upload", form).then((dat) => {
       const data = dat.data;

       setImg(data?.data?.display_url);
     });
  }
  function HandleSubmit(e) {
    e.preventDefault();
    const { name, username, pass2, pass1, email } = UserData;
      if (name && username && pass1 && pass2 && email) {
          if (pass1 !== pass2)
          {
              toast.error("Password not match", {
                  position:"top-center"
              })
          }
          else
          {
             axios.post(`${PORT}/auth/resister`, {
               ...UserData,
               
               password: pass1,
               img:img
                  
             }).then(data => {
                 if (data.data.status == 'success') {
                     toast.success(data.data.massage, {
                         position: "top-center"
                     })
                     dispatch(TakeUser({
                         ...data.data.user,
                         token:data.data.token

                     }))

                     setUserData({
                         name: "",
                         email: "",
                         pass1: "",
                         pass2: "",
                         username:""
                     })
                 }
                 else
                 {
                     toast.error(data.data.massage, {
                       position: "top-center",
                     });
                     }
             })
          }
          
        SetValidation({})
    } else {
      if (!email) {
        SetValidation((prev) => {
          return {
            ...prev,
            email: true,
          };
        });
      }
      if (!name) {
        SetValidation((prev) => {
          return {
            ...prev,
            name: true,
          };
        });
      }
      if (!username) {
        SetValidation((prev) => {
          return {
            ...prev,
            username: true,
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
      if (!pass2) {
        SetValidation((prev) => {
          return {
            ...prev,
            pass2: true,
          };
        });
      }
    }
  }
  return (
    <form className="w-[80%]" onSubmit={HandleSubmit}>
      <InputElement
        label="Full Name *"
        type="text"
        id="name"
        name="name"
        massage={validation.name}
         value={UserData.name}
        onChange={AddValue}
      />
      <InputElement
        label="User Name *"
        type="text"
        id="username"
        name="username"
        massage={validation.username}
        value={UserData.username}
        onChange={AddValue}
      />
      <InputElement
        label="Profile Picture"
        type="file"
        id="img"
        name="img"
        massage={false}
        onChange={AddValue}
      />
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
      <InputElement
        label="Confirmed Password *"
        type="password"
        id="pass2"
        name="pass2"
        massage={validation.pass2}
        value={UserData.pass2}
        onChange={AddValue}
      />
      <div className="pt-2 flex place-items-center gap-2 text-sm text-slate-500">
        <input
          type="checkbox"
          name=""
          id="terms"
          onChange={() => {
            setChecked((prev) => !prev);
          }}
        />
        <label htmlFor="terms">Accept terms and conditions</label>
      </div>
      <div className="pt-2">
        <button
          className={`w-full border-none py-1 px-2 text-sm ${
            checked ? " bg-orange-500" : "bg-gray-300"
          } rounded-sm text-white font-bold`}
          disabled={checked ? false : true}
        >
          Resiter Now
        </button>
          </div>
          <span className="text-slate-400 text-sm text-center">If you already have a account <Link to="/login" className="text-orange-600">Login Here</Link></span>
    </form>
  );
}
