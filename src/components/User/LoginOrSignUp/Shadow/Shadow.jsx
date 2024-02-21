import { motion } from 'framer-motion'
import React from 'react'
export default function Shadow(props) {
    const position = props.state ?"left-0"  : "right-0"
    const clas = `p-3 absolute w-[50%] hidden lg:flex md:flex  h-full bg-rose-400 shado flex justify-center place-items-center flex-col sale ${position}`;
    const obj = props.state
      ? {
          head: "Welcome Back",
          title:
            "Thanks for your support please login here to enjoy our services",
        }
        : {
            head: "Welcome User",
            title:"Please resister a account here to enjoy our facilty"
      };
  return (
    <motion.div layout transition={{duration:1,delay:1}} className={clas}>
          <div className='lg:text-5xl md:text-2xl text-xl font-bold text-white'>{ obj.head}</div>
          <p className='lg:text-sm md:text-sm text-[10px] text-white font-thin '>{ obj.title}</p>
    </motion.div>
  )
}
