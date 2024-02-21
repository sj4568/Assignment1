import React from 'react'
import Content from './Content'
import { FaCreditCard, FaDoorClosed, FaHandHoldingUsd, FaHeart, FaRegHeart, FaShoppingBag, FaSignOutAlt, FaTruckLoading, FaUser, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut } from '../../../Store/Slices/StoreSlice';
import { toast } from 'react-toastify';
import ProfileContent from '../../Container/Contents/ProfileContent';
import OrderContainer from '../../Container/Contents/OrderContainer/OrderContainer';



export default function SideContainer({handle}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function logout()
  {
    toast.success("Logout Successfully", {
      position:"top-center"
    })
    dispatch(LogOut())
    navigate("/")
  }
  return (
    <div className="w-full p-2 flex flex-col gap-2">
      <Content icon={<FaUser />} text="Profile"  handle={handle} comp={<ProfileContent/>}/>
      <Content icon={<FaShoppingBag />} text="Orders" handle={handle} comp={<OrderContainer/>}/>
      <Content icon={<FaHandHoldingUsd />} text="Payements" handle={handle}/>
      <Content icon={<FaCreditCard />} text="Cards" handle={handle}/>
      <Content icon={<FaTruckLoading />} text="Shipping Address" handle={handle}/>
      <Content icon={<FaSignOutAlt />} text="Logout" func={logout}  />
    </div>
  );
}
