import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className=" bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12">
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
      <div className=" items-center w-full justify-center flex space-x-4"></div>
      {/* icons */}
    </div>
  );
}

export default Header;
