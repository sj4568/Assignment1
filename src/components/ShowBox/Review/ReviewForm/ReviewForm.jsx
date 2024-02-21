import React, { useState } from 'react'
import Star from './Star/Star'
import StarContainer from './StarContainer/StarContainer'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { UpdateProduct } from '../../../Store/Slices/StoreSlice'
import { toast } from 'react-toastify'


export default function ReviewForm() {
  const products = useSelector(state => state.t_pro)
  const temp = useSelector(state => state.tempProduct)
  const user = useSelector(state=>state.user)
  const [massage, setMassage] = useState("")
  const [star, setStar] = useState(0)
  const dispatch = useDispatch()
    function AddValue(e)
    {
        setMassage(e.target.value)
  }
  function ChangeStar(obj)
  {
    setStar(obj)
    
  }
    function HandleForm()
    {
      if (massage && star) {
     
        const obj = {
          id: nanoid(),
          user: user,
          star: star,
          massage: massage
        }
        if (user['name'])
        {
          dispatch(UpdateProduct({ id: temp.id, body: obj }));
          setMassage("");
          setStar(0);
          toast("Review Send Succeessfully", {
            position: "top-center",
          });
        }
        else {
          toast.error("Please sign in for give review", {
            position:"top-center"
          })
        }
        
      }
    }
  return (
    <div className='flex justify-center place-items-center p-5 '>
          <div className="div lg:w-[50%] w-full">
              <div className='flex justify-between place-items-center'>
                  <StarContainer handle={ChangeStar} />
                  <div className='px-2'>
                      <button className='px-2 lg:text-sm text-[10px] mb-1 py-1 rounded-sm bg-rose-400 text-white' onClick={HandleForm}>Submit</button>
                  </div>
              </div>
              <textarea name="" id="" value={massage} onChange={AddValue} className=' rounded-md bg-slate-200 w-full p-3 text-sm' placeholder='Messege Here'></textarea>
      </div>
    </div>
  )
}
