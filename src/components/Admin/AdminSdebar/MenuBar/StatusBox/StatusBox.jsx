import React, { useEffect, useState } from 'react'

export default function StatusBox({text}) {
    
    const [bg, setBg] = useState('red')
    useEffect(() => {
        setBg(prev => {
            if (text == 'pending') return 'red'
            else if (text == 'shipping') return `yellow`
            else return `green`
        })
     },[])
  return (
    <div style={{background:bg}} className='p-0 font-extrabold text-white text-center'>
      {text}
    </div>
  )
}
