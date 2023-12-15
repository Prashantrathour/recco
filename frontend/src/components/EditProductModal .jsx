import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const EditProductModal = ({
  groceryName,
  brand,
  image,
  price,
  quantity,
  status,
 onClose,
 currentStatus,
  onUpdateProduct,
  id
}) => {
  const [quantityValue, setQuantityValue] = useState(quantity);
    const [editprice,setprice]=useState(price)
    const [statusvalue,setstatusvalue] = useState(currentStatus)
  
  const handleIncrement = () => {
    setQuantityValue((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantityValue > 1) {
      setQuantityValue((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg min-w-max overflow-x-auto">
        <div className="flex justify-between">
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-4">{groceryName}</h2>
            <p className="text-sm mb-2 text-gray-500">{brand}</p>
          </div>
          <MdClose onClick={onClose} className="cursor-pointer" />
        </div>
        <div className=" flex text-gray-600">
          <div className="w-1/3 py-4">
            <img
              src={image}
              alt="Product"
              className="w-full h-full"
            />
          </div>
          <div className="w-2/3  px-5 py-2  flex flex-col justify-between gap-5">
            <div className="flex items-center justify-between ">
              <label className="">Price($)</label>
              <div className="w-full justify-center">

              <input
                type="text"
                value={editprice}
                onChange={(e)=>setprice(e.target.value)}
                className="border p-1 w-[85px] rounded-xl text-right"
              /> <span>/6 ⁕ 1LB</span>

              </div>
            </div>
            <div className="flex items-center  justify-between">
              <label className="mr-0">Quantity</label>
              <div className="flex items-center gap-1  w-full justify-center">
                <button
                  onClick={handleDecrement}
                  className=" w-6  rounded-full bg-green-400 text-white text-center"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantityValue}
                  readOnly
                  className="border p-1 rounded-xl w-[85px] text-center"
                />
                <button
                  onClick={handleIncrement}
                  className="w-6  rounded-full bg-green-400 text-white text-center"
                >
                  +
                </button><span>x 6 ⁕ 1LB</span>
              </div>
            </div>
        <p className="text-lg  mb-4 flex justify-between"><span>Total</span> 
        <div  className=" w-full justify-center">

        <span className="w-[85px] text-center">${(+quantityValue*+editprice).toFixed(2)}</span>
        </div>
        
        </p>
          </div>
        </div>
        <div className="px-2 my-2">
            <p className="text-lg font-semibold text-left">Choose Reason <span className="text-sm text-gray-400">(optional)</span></p>
            <div className="flex justify-evenly items-start gap-1 text-sm w-full">
                {status.map((item)=>{
                    return <div  onClick={()=>setstatusvalue(item)} className={`rounded-2xl transition-all w-full p-1 px-1 border cursor-pointer ${statusvalue==item?"bg-green-600 text-white":""}`}><span   className="justify-center px-1 items-center whitespace-nowrap text-center  flex text-ellipsis">{item}</span>
                        </div>
                })}
            </div>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-1 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-1 rounded-2xl"
            onClick={() => onUpdateProduct(id,{price:editprice,quantity:quantityValue,total:(+quantityValue*+editprice).toFixed(2),currentStatus:statusvalue})}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
