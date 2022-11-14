import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  InboxIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../img/postenLogo.png";

function Header() {
  return (
    <div className=" bg-[#f3f3f3] w-full py-6 items-center justify-between flex px-12">
      {/* Search */}
      <div className=" w-full lg:flex hidden space-x-3 items-center justify-start py-2">
        {/* icon */}
        <MagnifyingGlassIcon className=" w-4 h-4" />
        <input
          type="text"
          placeholder="Search..."
          className=" bg-transparent outline-none"
        />
      </div>
      {/* logo */}
      <div className=" items-center w-full justify-center flex space-x-4">
        <img src={Logo} className="w-fit h-12" />
      </div>
      {/* icons */}
      <div className=" items-center justify-end space-x-6 flex w-full">
        <BellIcon className="header-icon" />
        <InboxIcon className="header-icon" />
        <UserCircleIcon className="header-icon" />
      </div>
    </div>
  );
}

export default Header;
