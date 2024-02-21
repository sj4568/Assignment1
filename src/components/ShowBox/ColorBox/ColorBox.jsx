import React, { useRef, useState } from 'react'

export default function ColorBox(props) {
  function SetColor() {
    props.getColor(props.color);
  }
    const [addClass,setClass]=useState("")
    function SelectColor()
    {
        setClass(prev => {
            if (prev == "")
            {
                return "outline outline-rose-400"
            }
            else {
                return ""
            }
        })
      SetColor()
  }
  
    const col = `w-[20px] h-[20px] ${props.color}  rounded-full  hover:outline hover:outline-rose-400 ${addClass}`;
  return (
    <div className={col}  onClick={SelectColor}>
    </div>
  )
}
