import React from 'react'
import { useState } from 'react'
import CountMemorize from '../Momorized/CountMemorize'
import { createContext } from 'react'
export default function DetailsBox(props) {
    
    const [visible, setVisible] = useState("")
    function Show()
    {
        setVisible(prev => {
            if (prev == "hidden")
            {
                return ""
            }
            else
            {
                return "hidden"
            }
            
            
        })
    }
    const clas = `absolute bg-red-500 text-[10px]  text-white px-1 rounded-full top-4 ${visible}`;

  return (
      <div className={clas} onClick={Show}>
          {props.value}
    </div>
  )
}
