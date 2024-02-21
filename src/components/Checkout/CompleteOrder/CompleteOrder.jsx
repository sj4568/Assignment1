import React from 'react'
import img from "../../../assets/CompleteOrder/img.png"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function CompleteOrder() {
    const user = useSelector(state => state.user)
    
  return (
    <div>
          <div className="cont h-[90vh] p-3 flex justify-center sale place-items-center flex-col">
              <div className="imgBox lg:w-[25vw] w-[30vw]">
                  <img src={img} alt="" />
              </div>
              <div className='text-xl'>
                  <span className=''>Congragulations</span> <span className='text-rose-400 font-bold'>{user?.name }</span>
              </div>
              <div className="div lg:text-2xl text-lg font-bold text-yellow-300">Your Order Placed Successfully</div>
              <div className="text-center lg:text-sm text-[10px] font-thin p-2  w-[70%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum?
              </div>
              <div className="div py-2">
                  <Link to="/store" className='px-3 py-2 bg-rose-400 text-sm text-white font-semibold rounded-lg'>
                      Continue Shopping
                  </Link>
              </div>
     </div>
    </div>
  )
}
