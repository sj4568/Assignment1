import React from 'react'
import InputBox from '../Admin/MainContent/SideContent/Products/ProductForm/InputBox/InputBox'

export default function Contect() {
  return (
    <div className="w-full h-screen flex justify-center place-items-center">
      <form action="" className="w-full lg:w-[50%] p-5 shadow rounded-md">
        <div className="header w-full text-center py-3 text-3xl font-semibold text-rose-400">Contect Us</div>
        <div>
          <InputBox
            title="Full Name"
            type="text"
            placeholder="Enter your full name"
            id="name"
          />
          <InputBox
            title="Email Address"
            type="email"
            placeholder="Enter your Email address"
            id="email"
          />
          <InputBox
            title="Phone"
            type="text"
            placeholder="Enter your Phone Number"
            id="phone"
                  />
                  <div className='flex flex-col py-2'>
                      <label htmlFor="">Your Massage</label>
                      <textarea name="" id="" placeholder='Massage' cols="10" rows="5" className='border p-3 focus:outline-none rounded-md'></textarea>
                  </div>
                  <input type="submit" value="Submit" className='form-control bg-rose-400 text-white font-semibold' />
        </div>
      </form>
    </div>
  );
}
