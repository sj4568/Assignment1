import React, { useState } from 'react'

export default function Address({ value, getAddress }) {
    const [state, setState] = useState("bg-white")
    function Clicked()
    {
        getAddress(value)
        setState(prev => {

            return prev == "bg-rose-400 text-white"
              ? "bg-white"
              : "bg-rose-400 text-white";
        })
    }
    const clas = `w-full px-3 py-1 italic text-sm sale font-extralight shadow-sm ${state}`;
  return (
    <div className={clas} onClick={Clicked}>
      {value}
    </div>
  )
}
