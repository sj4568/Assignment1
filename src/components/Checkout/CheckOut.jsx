import React from 'react'
import ShowCart from './ShowCart/ShowCart'
import OrderForm from './OrderForm/OrderForm'

export default function CheckOut() {
  return (
      <div className='py-7 bg-gray-50 flex justify-center'>
          <div className="checkout flex w-[90%] bg-white p-2 shadow flex-col lg:flex-row">
              <ShowCart />
           <OrderForm/>   
      </div>
    </div>
  )
}
