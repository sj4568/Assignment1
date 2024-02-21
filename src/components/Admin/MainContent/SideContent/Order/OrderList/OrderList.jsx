import React, { useState } from 'react'
import OrderBox from './OrderBox/OrderBox'
import { useSelector } from 'react-redux'

export default function OrderList({status}) {
    const orders = useSelector(state => state.orders)
    const stat = status?status:"pending"
    const order = orders?.filter(data => {
        const products = data?.order?.products
        const state = products?.some(dat => dat.status == stat)
        if (state)
        {
            return data
        }
        
    })
    
    const arr = order?.map((data,index) => {
        return <OrderBox data={data.order} key={index} id={data._id}/>
    })
    
  return (
    <div className='p-4'>
          <div className='text-2xl'>{status } Products</div>
          <div className="cotainer flex flex-col gap-2">
              {arr}
          </div>
    </div>
  )
}
