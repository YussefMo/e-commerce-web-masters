import banner from "../../../assets/images/bacola-banner-18.jpg.png"
import Sorting from "./Sorting"
import Item from "./Item";
import {ShopContext} from "../../../context/ShopContext"
import { useContext } from "react";


function Products() {

  const { allData, loading, error } = useContext(ShopContext);

  if (loading) return <p>Loading... </p>
  if (error) return <p>Error...</p>

  return (
    <div className="flex flex-col gap-5">
        {/* Banner >>>> Image */}
        <div className="banner ">
            <img src= {banner} alt="img not found" className="w-full h-full rounded-xl" />
        </div>

        {/* Sorting Products */}
        <Sorting />

        {/* Showing Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-[#EDEEF5] rounded-xl">

          {allData.map((el) => (
            <Item key={el.id} el={el} />
          ))}

        </div>



    </div>
  )
}

export default Products