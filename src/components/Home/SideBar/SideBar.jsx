import React from "react";
import UserAndSearch from "./UserAndSearch/UserAndSearch";

export default function SideBar() {
    return <div className="w-[30%] h-screen bg-slate-300 p-3 hidden md:block lg:block">
      <UserAndSearch/>
  </div>;
}
