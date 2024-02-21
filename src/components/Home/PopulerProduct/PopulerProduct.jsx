import React from "react";
import { motion} from "framer-motion"
import lady1 from "../../../assets/shopping/Banner/lady4.jpg";
import man1 from "../../../assets/shopping/Banner/man2.webp";
import man2 from "../../../assets/shopping/Banner/man1..webp";
import lady2 from "../../../assets/shopping/Banner/lady1.jpg";
import lady3 from "../../../assets/shopping/Banner/lady5.jpg";


export default function PopulerProduct() {

  return (
    <div className="w-full  bg-red-100 flex justify-center place-items-center py-5">
      <div className="w-[70%] grid lg:grid-cols-2 place-items-center gap-4 grid-cols-1 md:grid-cols-2">
        <div className="textBox flex flex-col ">
          <div className=" flex flex-col mb-3">
            <span className="text-white text-4xl font-bold links mb-2">
              Populer Product
            </span>
            <span className="text-white text-lg font-medium sale">
              this is our website if you wont to be our customer
            </span>
          </div>
          <div className="imgBox relative group overflow-hidden">
            <img src={lady1} alt="" />
            
            <motion.div layout transition={3} initial={{scale:0.2,opacity:0.2}} animate={{scale:1,opacity:1}} className="shadow absolute w-full h-full group-hover:h-full top-0 left-0  group-hover:flex justify-center place-items-center hidden opacity-100 backdrop-blur-sm">
              <button className="px-3 py-2 bg-white text-rose-400 rounded translate-y-80 z-2 transition duration-500 group-hover:translate-y-0">
                Buy Now
              </button>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 h-full">
          <div className="imgBox relative group overflow-hidden ">
            <img src={man1} alt="" className=" h-[100%]  object-cover" />
            <div className="shadow absolute w-full h-full group-hover:h-full top-0 left-0  group-hover:flex justify-center place-items-center bg-rose-400 hidden">
              <button className="px-3 py-2 text-[10px] bg-white text-rose-400 rounded translate-y-80 transition duration-500 group-hover:translate-y-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="imgBox relative group overflow-hidden">
            <img src={lady2} alt="" className=" h-[100%] object-cover" />
            <div className="shadow absolute w-full h-full group-hover:h-full top-0 left-0  group-hover:flex justify-center place-items-center bg-rose-400 hidden">
              <button className="px-3 py-2 text-[10px] bg-white text-rose-400 rounded translate-y-80 transition duration-500 group-hover:translate-y-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="imgBox relative group overflow-hidden">
            <img src={lady3} alt="" className="object-cover  h-[100%]" />
            <div className="shadow absolute w-full h-full group-hover:h-full top-0 left-0  group-hover:flex justify-center place-items-center bg-rose-400 hidden">
              <button className="px-3 py-2 text-[10px] bg-white text-rose-400 rounded translate-y-80 transition duration-500 group-hover:translate-y-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="imgBox relative group overflow-hidden">
            <img src={man2} alt="" className=" h-[100%] object-cover" />
            <div className="shadow absolute w-full h-full group-hover:h-full top-0 left-0  group-hover:flex justify-center place-items-center bg-rose-400 hidden">
              <button className="px-3 py-2  text-[10px] bg-white text-rose-400 rounded translate-y-80 transition duration-500 group-hover:translate-y-0">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
