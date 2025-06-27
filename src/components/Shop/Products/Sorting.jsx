import {ShopContext} from "../../../context/ShopContext"
import { useContext } from "react";

function Sorting() {

  const {sortingData , sort} = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center  p-3 lg:p-5 bg-[#F7F8FD] rounded-xl font-medium">
        {/* total products */}
        <p className="text-[#9B9BB4] text-xs lg:text-lg"><span>62</span> products</p>

        {/* sorting  */}
        <div className="flex justify-center items-center text-sm">
          <p className="text-xs lg:text-lg text-gray-500">Sort by :</p>

          <select 
            className="border-none outline-none cursor-pointer text-xs lg:text-base"
            onChange={sortingData}
            defaultValue={sort? sort : "default"}
          > 
            <option value="default">Default</option>  
            <option value="name(A-Z)">Alphabetically, A-Z</option>
            <option value="name(Z-A)">Alphabetically, Z-A</option>
            <option value="price(low-high)">Price ( low - high )</option>  
            <option value="price(high-low)">Price ( high - low )</option>  
          </select>
        </div>


    </div>
  )
}

export default Sorting