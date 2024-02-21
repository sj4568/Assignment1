import React, { useState } from 'react'
import Star from '../Star/Star'
import { FaStar } from 'react-icons/fa';

export default function StarContainer({handle}) {
    const [stars, setStars] = useState([
      {
        value: 1,
        state: false,
      },
      {
        value: 2,
        state: false,
      },
      {
        value: 3,
        state: false,
      },
      {
        value: 4,
        state: false,
      },
      {
        value: 5,
        state: false,
      },
    ]);
    const [value, setValue] = useState(0)
      let counter = 0; 
    function handleValue(value)
    {
        setValue(value)
        setStars(prev => {
            let newArr = prev?.map(data => {
                return data.value <= value ? {
                    ...data,
                    state:true
                } : {
                        ...data,
                    state:false
                }
            })
            return newArr
        })
        handle(value)
    }
  
    const arr = stars?.map(data => {
       
            return <Star value={data.value} handle={handleValue} state={data.state}  />
        
    })
  return (
      <div className='p-2 flex'>
      {arr}
    </div>
  )
}
