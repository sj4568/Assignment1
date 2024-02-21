import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSdebar/AdminSidebar'
import MainContainer from './MainContent/MainContainer'
import { useDispatch } from 'react-redux'
import { GetUser, getOrders } from '../Store/Slices/StoreSlice'
import Dasboard from './MainContent/SideContent/Dashboard/Dasboard'

export default function Admin() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
    dispatch(GetUser())
  }, [])
  const [comp, setComp] = useState(<Dasboard />)
  function ChangeComp(obj)
  {
    setComp(obj)
  }
  return (
    <div className='sale'>
      <div className="containe flex  ">
        <AdminSidebar handle={ChangeComp} />
        <MainContainer element={comp} />
        
      </div>
    </div>
  )
}
