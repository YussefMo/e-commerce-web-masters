
import { useState } from "react";
import { FaStar } from "react-icons/fa";


function Item({el}) {

  const [count , setCount] = useState(0)

  function handelCount (state) {
    if(state == "plus") {
      setCount(prev => prev + 1)
    }else {
      setCount(prev => Math.max(prev - 1, 0))
    }
  }
  
  return (
    <div className="card p-5 border-x border-b border-[#EDEEF5]">
        <div className="img p-3 my-5 cursor-pointer">
            <img src= {el.images[0] || el.category.image} alt="" className="w-full h-full rounded-2xl"/>
        </div>

        <p className="text-sm font-medium mb-2 text-[#202435]"> {el.title.split(" ").splice(0, 2).join(" ")} </p>

        <span style={{color: "#00B853"}}>In stock</span>

        <p className="flex items-center text-xs my-2 text-[#FFCD00]">
            <FaStar /> 
            <FaStar /> 
            <FaStar /> 
            <FaStar /> 
            <FaStar /> 
            <span className="ms-2 text-[#71778E]">1 review</span>
        </p>

        <p className="font-bold text-[#D51243]">${el.price} </p>

        <div className="w-full flex justify-center items-center my-2 border border-[#EDEEF5] rounded-3xl overflow-hidden">
            <span 
              className="w-1/4 text-center bg-gray-200 p-1 cursor-pointer"
              onClick={()=> handelCount("min")}
            >-</span>
            <span className="w-1/2 text-center "> {count} </span>
            <span 
              className="w-1/4 text-center bg-[#FFCD00] p-1 cursor-pointer"
              onClick={()=> handelCount("plus")}
            >+</span>
        </div>

    </div>
  )
}

export default Item