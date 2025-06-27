
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
export const CartItem = ({ item, incrementQuantity, decrementQuantity, removeItem }) => {
    const [animateQty, setAnimateQty] = useState(false);
  
    useEffect(() => {
      setAnimateQty(true);
      const timeout = setTimeout(() => setAnimateQty(false), 150);
      return () => clearTimeout(timeout);
    }, [item.quantity]);
  
    return (
      <div className="p-[2px] rounded-lg bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500">
        <div className="flex items-center gap-6 p-4 rounded-lg bg-white">
          <img
            src={item.images?.[0]}
            alt={item.title}
            className="w-24 h-24 object-cover rounded-md"
          />
  
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-500">${item.price}</p>
  
            <div className="flex items-center mt-2 gap-2">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="p-1 border rounded hover:bg-gray-100 cursor-pointer"
              >
                <FaMinus size={14} />
              </button>
  
              <span
                className={`px-3 py-1 border rounded text-sm font-medium transition-all duration-200 ${
                  animateQty ? "scale-110 text-blue-600" : "scale-100"
                }`}
              >
                {item.quantity}
              </span>
  
              <button
                onClick={() => incrementQuantity(item.id)}
                className="p-1 border rounded hover:bg-gray-100 cursor-pointer"
              >
                <FaPlus size={14} />
              </button>
            </div>
          </div>
  
          <div className="text-right flex flex-col items-end justify-between h-full">
            <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:text-red-800 text-sm mt-4 flex items-center gap-1 cursor-pointer"
            >
              <FaTrash size={14} /> Remove
            </button>
          </div>
        </div>
      </div>
    );
  };
  