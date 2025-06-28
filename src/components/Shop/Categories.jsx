import {ShopContext} from "../../context/ShopContext"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "../Spinner";


function Categories() {

  const { allCategories, loading, error , getFilteredDataByPrice } = useContext(ShopContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryIdFromUrl = searchParams.get('category');

  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleChange = (id) => {
    if (parseInt(categoryIdFromUrl) === id) {
      navigate(`/shop`);
    } else {
      navigate(`/shop?category=${id}`);
    }
  };


  useEffect(()=> {
    getFilteredDataByPrice({maxPrice , minPrice})
  },[maxPrice, minPrice])







  if (loading) return <Spinner />
  if (error) return <p>Error...</p>

  

  return (
    <div className="flex flex-col gap-5">

        {/* sorting by category */}
        <div>
        {/* title */}
          <p className="font-semibold uppercase">Product Categories</p>

          {/* sorting */}
          <div className="category mt-3">

            {allCategories.map((el)=> (

              <div key={el.id} className="flex justify-start items-center gap-2">

                  <input 
                    type="checkbox" 
                    id= {el.id}
                    onChange={() => handleChange(el.id)}
                    checked={parseInt(categoryIdFromUrl) === el.id}
                    />

                  <label htmlFor= {el.id} > {el.name} </label>
              </div>
            ))}
              
          </div>
        </div>

        {/* sorting by Price */}

        <div>
          {/* title */}
          <p className="font-semibold uppercase">Price</p>

          {/* sorting */}
          <div className="grid grid-cols-4 gap-10 mt-3 relative">
            {/* form */}
            <div className="col-span-2 flex flex-col ">
              <span className="text-[#71778E]">From</span>
              <input 
                type="number" 
                placeholder="0"  
                className=" text-[#71778E] border border-[#F3F4F7] bg-[#F3F4F7] p-2 outline-none"
                value={minPrice}
                onChange={(e)=>setMinPrice(e.target.value)}
                />
            </div>

            {/* to */}
            <div className="col-span-2 flex flex-col ">
              <span className="text-[#71778E]">To</span>
              <input 
                type="number" 
                placeholder="100"  
                className=" text-[#71778E] border border-[#F3F4F7] bg-[#F3F4F7] p-2 outline-none"
                value={maxPrice}
                onChange={(e)=>setMaxPrice(e.target.value)}
                />
            </div>

            <span className="absolute top-1/2 left-1/2 -translate-x-1/2">-</span>
          </div>

        </div>



    </div>
  )
}

export default Categories