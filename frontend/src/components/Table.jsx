import React, { useState } from "react";
import { BiCheck, BiPrinter, BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Popup } from "./Popup";

function Table({ data }) {
    const [popupOpen, setPopupOpen] = useState(false);
    const [productid,setid]=useState(1)
    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  const checkhandle = (id) => {
    alert(id);
  };
  const crosshandle = (id) => {
    setid(id)
    openPopup()
   
  };
  const getstatus=(status)=>{
        console.log(status)
        closePopup()
  }
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col px-4  space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 m-5">
              <form className="flex items-center w-1/2">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search ..."
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                  >
                    <BiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
                  </button>
                </div>
              </form>

              <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-1 text-sm font-medium rounded-2xl border border-green-900 text-green-700"
                >
                  Add item
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white  outline-none"
                >
                  <BiPrinter />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto p-6 m-3">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-5">
                <thead className="text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Brand
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Total
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr className="border-b-2 dark:border-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700 py-2 p-4">
                        <th
                          scope="row"
                          className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img
                            src={item.image}
                            alt="iMac Front Image"
                            className="w-auto h-10 mr-3 p-2"
                          />
                          {item.groceryName}
                        </th>
                        <td className="px-4 py-2">
                          <span className="text-xs font-medium px-2 py-0.5 ">
                            {item.brand}
                          </span>
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            $ {item.price}/6+1LB
                          </div>
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.quantity}X 6+1LB
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          ${item.total}
                        </td>

                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex justify-between gap-3">
                            {item.currentStatus == "false" ? (
                              <span className="w-24"></span>
                            ) : (
                              <span className={`w-24 items-center text-center rounded-2xl ${
                                item.currentStatus == "Approved"
                                  ? "bg-green-600"
                                  : item.currentStatus!== "Approved"?"bg-red-700":"bg-gray-700"
                              } text-white`}>{item.currentStatus}</span>
                            )}
                            <span
                              onClick={() => checkhandle(item.id)}
                              className={`text-lg font-bold cursor-pointer ${
                                item.currentStatus == "Approved"
                                  ? "text-green-600"
                                  : "text-gray-400"
                              }`}
                            >
                              <BiCheck className="text-2xl font-extrabold" />
                            </span>
                            <span
                              onClick={() => crosshandle(item.id)}
                              className={`text-lg font-bold cursor-pointer ${item.currentStatus!== "Approved"&&item.currentStatus!="false"?"text-red-700":"text-gray-400"}`}
                            >
                              <MdClose />
                            </span>
                            <span className="hover:underline cursor-pointer">
                              Edit
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Popup productid={productid} data={data} getstatus={getstatus} isOpen={popupOpen} closePopup={closePopup} />
    </div>
  );
}

export default Table;
