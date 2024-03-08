import React from "react";
import img from "../../../../assets/Avatar/avatar.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function UserLink() {
  const user = useSelector((state) => state.user);
  return (
    <Link to="/profile/user" className="w-full">
      <img
        src={user?.img ? user.img : img}
        className="w-[30px] h-[30px] object-cover rounded-full"
        alt=""
      />
    </Link>
  );
}
