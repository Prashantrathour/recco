import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action/dataActions";
import NavBar from "../components/NavBar";
import { FaAngleLeft } from "react-icons/fa";
import { BiFoodTag, BiSolidHotel } from "react-icons/bi";
import { MdHotelClass, MdOutlineRestaurantMenu } from "react-icons/md";
import { AiTwotoneRest } from "react-icons/ai";
import { TiPointOfInterest } from "react-icons/ti";

import { RiRestaurantFill } from "react-icons/ri";
import Table from "../components/Table";
function Home() {
  const dispatch = useDispatch();
  const {data} = useSelector((store) => store);
  
  useEffect(() => {
    dispatch(getData);
  }, []);
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="shadow-xl border-b-2 flex flex-col">
        <div className="flex justify-start float-left p-3 lg:mx-20">
          <p className="flex text-sm text-gray-600 gap-2 text-center justify-center items-center">
            <span>order</span>

            <FaAngleLeft className="mt-1" />

            <span className="underline">order 324344</span>
          </p>
        </div>
        <div className="flex justify-between float-left px-3 lg:mx-20">
          <div className="mb-2">
            <p className="font-bold text-xl text-gray-700">Order 3223BDC</p>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="p-1 px-4 rounded-2xl border border-green-800">
              Back
            </button>
            <button className="p-1 px-4 rounded-2xl bg-green-800 text-white">
              Aprove Order
            </button>
          </div>
        </div>
      </div>
    
      <div className="flex justify-center float-left px-3 mt-7 w-full ">
      <div className="grid grid-col-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 justify-between items-start shadow-lg p-2 w-full lg:mx-10 transition-all duration-5000 ease-in-out ">
        {/* Supplier */}
        <div className="p-4 border-r min-h-full  w-full text-left ">
          <p className="text-sm text-gray-500">Supplier</p>
          <h1 className="text-lg font-semibold text-gray-800">
            East West Coastal Vegetable
          </h1>
        </div>

        {/* Shipping Date */}
        <div className="p-4  min-h-full w-full border-t border-r sm:border-t-0  text-left">
          <p className="text-sm text-gray-500">Shipping Date</p>
          <h1 className="text-lg font-semibold text-gray-800">Thu, Feb 10</h1>
        </div>

        {/* Total */}
        <div className="p-4 border-r min-h-full w-full border-t md:border-t-0  text-left">
          <p className="text-sm text-gray-500">Total</p>
          <h1 className="text-lg font-semibold text-gray-800">$234324</h1>
        </div>

        {/* Category */}
        <div className="p-4 border-r min-h-full w-full border-t lg:border-t-0  text-left">
          <p className="text-sm text-gray-500">Category</p>
          <div className="grid grid-cols-4 gap-2 text-base font-normal text-gray-600 mt-1">
            <BiSolidHotel />
            <MdOutlineRestaurantMenu />
            <RiRestaurantFill />
            <AiTwotoneRest />
            <AiTwotoneRest />
            <TiPointOfInterest />
            <MdHotelClass />
            <BiFoodTag />
          </div>
        </div>

        {/* Department */}
        <div className="p-4 border-r min-h-full w-full border-t lg:border-t-0 text-left">
          <p className="text-sm text-gray-500">Department</p>
          <h1 className="text-lg font-semibold text-gray-800">
            2000-333-4444
          </h1>
        </div>

        {/* Status */}
        <div className="p-4 min-h-full w-full border-t lg:border-t-0 text-left">
          <p className="text-sm text-gray-500">Status</p>
          <h1 className="text-lg font-semibold text-gray-800">
            Awaiting your approval
          </h1>
        </div>
      </div>
    </div>
    <Table data={data}/>
    </div>
  );
}

export default Home;
