import React from 'react'
import OrderCard from '../OrderCard/OrderCard'
import { motion } from 'framer-motion'

export default function DateBox({ date ,id,pack}) {
    const order = date?.order
    const products = order?.products
    const arr = products?.map(data => {
        return <OrderCard data={data} key={data._id} order={order } id={id}  products={products} />
    })
  return (
    <motion.div layout>
          <div className="header lg:text-xl text-black opacity-50 py-3">
             {order?.date}
          </div>
          <div className="orderContainer grid lg:grid-cols-2 gap-2">
              {arr}
          </div>
    </motion.div>
  )
}
