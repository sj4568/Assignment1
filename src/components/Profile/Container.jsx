import React from 'react'
import UserDetailse from './UserDetails/UserDetailse'
import ChnagePassword from './ChangePassword/ChangePassword'
import { useParams } from 'react-router-dom'

export default function Container() {
    const { id } = useParams()
   
  return (
    <div className='w-full h-screen bg-slate-300 flex justify-center place-items-center'>
      {id =='change'?<ChnagePassword/>:<UserDetailse/>}
    </div>
  )
}
