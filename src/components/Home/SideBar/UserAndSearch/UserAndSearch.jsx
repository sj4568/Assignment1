import React from "react";
import UserLink from "./UserLink";
import Searchbar from "./Searchbar";

export default function UserAndSearch() {
  return (
    <div className="w-full h-[30px] flex  gap-5 justify-center place-items-center">
      <UserLink />
      <Searchbar />
    </div>
  );
}
