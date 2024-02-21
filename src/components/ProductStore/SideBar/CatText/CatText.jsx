import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SaveSotreData } from '../../../Store/Slices/StoreSlice'

export default function CatText({ data, value }) {
    const products = useSelector(state=>state.t_pro)
    const dispatch = useDispatch()
    function SaveData()
    {
         
      const pro = products.filter((data) => data.type == value);
      dispatch(SaveSotreData(pro));
    }
  return (
      <span className=' cursor-pointer lg:text-sm md:text-sm text-[10px] font-medium' onClick={SaveData}>
          {data}
      </span>
      
  )
}
