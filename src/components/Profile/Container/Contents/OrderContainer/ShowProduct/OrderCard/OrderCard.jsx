import React, { useEffect, useState } from 'react'
import img from "../../../../../../../assets/products/shoe1-1.jpg"
import { distance2D, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify'
import { DeleteOrder} from '../../../../../../Store/Slices/StoreSlice'
import { useNavigate } from 'react-router-dom'


export default function OrderCard({ data, id, order, products }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const orderk = useSelector((state) => state.orders);
  
    const [Data, setData] = useState(orderk);
    const [status, SetStatus] = useState(data?.status)
    const [color, setColor] = useState("red")
    useEffect(() => {
        setColor(prev => {
            return status=="pending"?"red":"green"
        })
    }, [])
    function Cencel()
    {
      dispatch(DeleteOrder({
        id: id,
        pro_id:data?._id
      }))
      toast.success("Order Cencel Successfully", {
        position:"top-center"
      })
     navigate("/login") 
    }
  return (
    <motion.div layout transition={2} className="p-4 shadow flex flex-col sale rounded-md">
      <div className="div flex justify-between lg:py-2 lg:place-items-center flex-col lg:flex-row md:flex-row">
        <div className="grid grid-cols-2 gap-1 place-items-center">
          <div className="imgBox w-full h-full relative bg-red-500">
            <img
              src={data?.img}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="textBox">
            <h1 className="lg:text-lg text-sm font-medium p-0">{data?.name}</h1>
            <span className="lg:text-sm font-thin p-0 m-0 text-[10px]">Title</span>
          </div>
        </div>
        <div className="price lg:py-3 pt-2 lg:text-base text-sm">
        Amount  {data?.amount}x{data?.price}
        </div>
      </div>
      <div className="status lg:py-3 py-3 lg:text-base text-sm font-thin">
        Status: <span style={{ color: color }}>{status}</span>{" "}
      </div>
          {status === "pending" ? <div className="button flex gap-3">
              <button className="bg-emerald-200 px-3 py-1 rounded-md lg:text-base text-[10px] text-white">
                  Update
              </button>
              <button className="bg-rose-400 px-3 py-1 rounded-md lg:text-base text-[10px] text-white" onClick={Cencel}>
                  Cencel
              </button>
          </div> : <div className="button flex gap-3">
              <button className="bg-emerald-200 px-3 py-1 rounded-md lg:text-base text-[10px] text-white">
                  Show Details
              </button>
              <button className="bg-rose-400 px-3 py-1 rounded-md lg:text-base text-[10px] text-white">
                  Contect
              </button>
          </div>}
    </motion.div>
  );
}
