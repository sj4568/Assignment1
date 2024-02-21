import React, { useState } from 'react'
import { FaPaypal } from 'react-icons/fa'
import InputElement from '../../InputElement/InputElement'
import { motion } from 'framer-motion'

export default function PayCard(props) {
    const [state, setState] = useState("hidden")
    function ChangeState()
    {
        setState(prev => {
            return prev=="hidden"?"":"hidden"
        })
    }
    const clas=`${state} ovarflow-hidden`
  return (
    <motion.div
      layout
      className="py-2 px-4 bg-white sale rounded-sm hover:shadow my-2"
    >
      <div
        className="flex justify-between place-items-center text-rose-400"
        onClick={ChangeState}
      >
        <div className="icon">
          {props.icon}
        </div>
              <div className="title text-sm font-bold ">{ props.title}</div>
      </div>
      <motion.div
        initial={{ marginTop: 20 }}
        animate={{ marginTop: 0 }}
        transition={1}
        className={clas}
      >
              {props.des}
            
      </motion.div>
    </motion.div>
  );
}
