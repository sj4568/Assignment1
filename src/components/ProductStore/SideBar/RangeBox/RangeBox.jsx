import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { SaveSotreData } from '../../../Store/Slices/StoreSlice'

export default function RangeBox(props, children) {
    const products = useSelector((state) => state.t_pro);
    const dispatch = useDispatch()
    function saveData()
    {
        const pro = products.filter(data => data.price >= props.low && data.price <= props.high)
        dispatch(SaveSotreData(pro))
        
  }
  function Filter(e)
  {
    if (e.target.checked)
    {
      saveData()
    }
    else
    {
      const pro = products.filter(
        (data) => data
      );
      dispatch(SaveSotreData(pro));
    }
    
    
  }
  return (
    <div className='flex gap-1 text-[11px] md:text-sm lg:text-sm'>
          <input type="checkbox" name="btn" id={props.low} onChange={Filter} />
          <label htmlFor={props.low}>${props.low}-${props.high }</label>
    </div>
  )
}
