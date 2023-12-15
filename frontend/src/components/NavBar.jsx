import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";

function NavBar() {
  return (
    <div className="bg-green-900 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4 lg:px-10">
        <ul className="list-none flex justify-between items-center  w-1/3 p-2 ">
          <li className="font-bold text-lg lg:text-xl">Recco</li>
          <li className="hidden md:block font-semibold">Store</li>
          <li className="hidden md:block font-semibold">Orders</li>
          <li className="hidden md:block font-semibold">Analytics</li>
        </ul>
        <div className="flex items-center">
          <GiShoppingCart className="text-2xl lg:text-3xl mr-2" />
          <div className="lg:flex lg:items-center">
            <span className="lg:inline hidden">Hello,Johns</span>
            <span className="lg:inline hidden ml-1"><FaAngleDown /></span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
