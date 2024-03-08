import React from 'react'
import UserLink from '../../SideBar/UserAndSearch/UserLink'
import Searchbar from '../../SideBar/UserAndSearch/Searchbar'

export default function Header() {
  return (
    <div className="w-full shadow flex flex-col justify-center place-items-center p-2 ">
      <div className="flex w-full place-items-center justify-between lg:hidden md:hidden">
        <div className="w-full pl-3">
          <UserLink />
        </div>
        <div className="w-full">
          <Searchbar />
        </div>
      </div>

      <div className="w-full py-1 flex justify-center place-items-center my-3">
        <button className='bg-orange-600 text-white px-2 py-1 text-sm  rounded-md'>Create Post</button>
      </div>
    </div>
  );
}
