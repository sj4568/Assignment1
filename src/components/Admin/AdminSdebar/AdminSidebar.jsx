import React from 'react'
import MenuBar from './MenuBar/MenuBar'
import { MdSms, MdSpeed } from 'react-icons/md';
import { FaMoneyBill, FaShippingFast } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';
import Dasboard from '../MainContent/SideContent/Dashboard/Dasboard';
import Products from '../MainContent/SideContent/Products/Products';
import Order from '../MainContent/SideContent/Order/Order';
import { useDispatch } from 'react-redux';
import { AdminLogOut } from '../../Store/Slices/StoreSlice';
import { toast } from 'react-toastify';

export default function AdminSidebar({ handle }) {
  const dispatch = useDispatch()
  function LogOut()
  {
    dispatch(AdminLogOut())
    toast.success("Logout Successfully", {
      position:"top-center"
    })
  }
  return (
    <div className="w-[20%] h-screen bg-rose-400">
      <div className="containe mt-9 flex flex-col gap-3 p-3">
        <MenuBar icon={<MdSpeed />} text={"Dashboard"}  handle={handle} comp={<Dasboard/>} />
        <MenuBar icon={<FaShippingFast />} text="Products" handle={handle} comp={<Products/>} />
        <MenuBar icon={<FaBagShopping />} text="Orders" handle={handle} comp={<Order/>} />
        <MenuBar icon={<FaMoneyBill />} text="Payments" handle={handle} />
        <MenuBar icon={<MdSms />} text="Massages" handle={handle} />
        <MenuBar icon={<IoLogOut />} text="Logout" handle={LogOut} />
      </div>
    </div>
  );
}
