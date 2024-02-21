import React, { useState } from 'react'

import Resister from './Resister/Resister'
import Login from './Login/Login'
import Shadow from './Shadow/Shadow'

export default function Form() {
  const [state, setState] = useState(false)
  const [show,setShow]=useState(false)
  const changeState = () => {
    setState(prev=>!prev)
  }
  const changeShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className='py-3 flex justify-center'>
          <div className='w-[90%] shadow-md  flex justify-between relative flex-col lg:flex-row md:flex-row'>
        <Resister  state={show} handle={changeState} Show={changeShow} />
        <Login state={show} handle={changeState} Show={changeShow} />
        <Shadow state={state } />
          </div>
    </div>
  )
}
