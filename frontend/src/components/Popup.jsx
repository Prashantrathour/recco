import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Popup = ({ isOpen, closePopup,productid,data,getstatus }) => {
    console.log(data,productid)
     const Product=data?.find((item)=>item.id==productid)
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="bg-white w-96 p-9 px-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Missing Product</h2>
          <button onClick={closePopup}>
            <AiOutlineClose />
          </button>
        </div>
        <p  className="text-left">{Product?.groceryName||"NA"}...id Urgent ?</p>
        <div className="flex justify-end mt-4">
          <button onClick={()=>getstatus(true)} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
            Yes
          </button>
          <button
            className="px-4 py-2 border border-gray-300 rounded"
            onClick={()=>getstatus(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

// const App = () => {
//   const [popupOpen, setPopupOpen] = useState(false);

//   const openPopup = () => {
//     setPopupOpen(true);
//   };

//   const closePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <button onClick={openPopup} className="px-4 py-2 bg-blue-500 text-white rounded">
//         Open Popup
//       </button>

//       <Popup isOpen={popupOpen} closePopup={closePopup} />
//     </div>
//   );
// };

// export default App;
