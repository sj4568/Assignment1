import React, { useState } from 'react'
import Address from './Address/Address'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../../../User/LoginOrSignUp/FormInput/FormInput'
import { UpdateUser } from '../../../Store/Slices/StoreSlice'

export default function AddressContainer({getAddress}) {
    const user = useSelector(state => state.user)
    const [temp, setTemp] = useState("")
    
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    function Handle()
    {
        const address = [...user?.address];
       
        if (temp) {
            const obj = {
                ...user,
                address: [...user?.address,temp]
            }
            dispatch(UpdateUser(obj))
            setShow(false)
            setTemp("")
        }
    }
    const addresses = user?user.address:[]
    const arr = addresses.map(data => {
        return <Address value={data} key={0} getAddress={ getAddress} />
    })
  return (
    <div className="my-2 flex flex-col gap-1 sale ">
      {arr}
          {show ? <>
              <FormInput placeholder="Enter Address" onChange={(e)=>setTemp(e.target.value)} />
              <button className="w-full bg-rose-400 text-white text-sm py-1 my-2" onClick={Handle}>
                  Add
              </button>
          </> :
              <button className="w-full bg-rose-400 text-white text-sm py-1 my-2" onClick={()=>{setShow(true)}}>
                  Add Address
              </button>}
    </div>
  );
}
