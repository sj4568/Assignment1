import React, { useState } from 'react'

export default function SizeBox(props) {
  function SetColor() {
    props.getSize(props.size);
  }
  const [border, setBorder] = useState("")
  function Selected()
  {
    setBorder(prev => {
      if (prev == "border-1 border-zinc-600")
      {
        return ""
      }
      else
      {
        return "border-1 border-zinc-600"
        }
    })
    SetColor()
  }
  
  const clas = `rounded-sm bg-zinc-300 px-2 py-1 text-[12px] font-bold flex justify-center place-items-center hover:outline hover:outline-zinc-100 ${border}`;

  
  return (
    <div className={clas} onClick={Selected}>
      {props.size}
    </div>
  )
}
