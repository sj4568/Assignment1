import React from 'react'
import img from "../../../assets/shopping/Banner/leg.png"
export default function Banner() {
  return (
    <div className="overview w-full py-32">
      <div className="middler-container bg-rose-400 flex gap-9">
              <div className="imgBox hidden lg:block md:block">
                  <img src={img} alt="" className=' drop-shadow-md' />
        </div>
        <div className="textBox py-36 px-4">
          <div className=" text-black text-4xl font-bold sale">
            Join Our Community
          </div>
          <div className=" text-white text-xl mt-3  font-normal sale">
            join our community for enjoy our best policy join our community .
                  </div>
                  <div className="inputBox mt-3 flex gap-3">
                      <input type="text" className='px-4 py-2 focus:outline-none' />
                      <button className='border border-white px-3 text-white font-semibold  hover:bg-white hover:text-rose-400'>Subscibe</button>
                  </div>
                  
        </div>
      </div>
    </div>
  );
}
