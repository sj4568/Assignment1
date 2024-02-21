import React, { useEffect, useState } from 'react'
import FormInput from '../FormInput/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, UpdateUser } from '../../../Store/Slices/StoreSlice';
import { toast } from 'react-toastify';

export default function Login(props) {
    const data = useSelector(state=>state.users)
  const [formdata, setFormData] = useState({
    email: "",
    pass:""
  })
  const dispatch = useDispatch()
  function Addvalue(e)
  {
    
    const { name, value } = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const [err, setErr] = useState("");
  const [color, setColor] = useState("");
  function HandleSignIn()
  {
    
    const found = data?.some(dat => dat.email == formdata.email)
    if (found)
    {
      const user = data?.filter(dat => dat.email === formdata.email)[0]
      if (user.email === formdata.email && user.pass == formdata.pass)
      {
        dispatch(AddUser(user))
        toast.success("Log in Successfully")
        setErr("Log in Successfully")
        setColor("green")
      }
      else
      {
        setErr("Something is wrong")
        setColor("red")
      }
      
    }
    else
    {
      setErr("account is found");
      setColor("red");
      }
  }
    const show = props.show===false ? "hidden" : "flex"
    const clas = `lg:w-[50%] md:w-[50%] w-full lg:px-7 py-2 sale flex justify-center place-items-center`;
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
            <button className="bg-rose-400 rounded-sm shadow-md w-[60%] py-2 text-white" onClick={HandleSignIn}>
              Login
            </button>
            <div className="link py-2 text-sm text-slate-400 flex justify-center gap-2" >
              If you have no account{" "}
              <button
                className="text-rose-400 hidden lg:block md:block"
                onClick={() => {
                  props.handle();
                }}
              >
                Rester Here
              </button>
              <button
                className="text-rose-400 lg:hidden md:hidden"
                onClick={() => {
                  props.Show();
                }}
              >
                Rester Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
