import Categories from "./Categories"
import Products from "./Products/Products"


function Shop() {
  return (
    <div className="container mx-auto px-4">
        {/* title */}
        <div className="title py-2">
            <p className="text-xs font-semibold uppercase">
                Home 
                <span className="text-graycolor ps-1"> 
                    &gt; Products
                </span>
            </p>
        </div>

        {/* container of Page */}
        <div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">

            {/* categoriy */}
            <div className="">
                <Categories />
            </div>

            {/* Products */}
            <div className="md:col-span-2 lg:col-span-3">
                <Products />
            </div>
        </div>

    </div>
  )
}

export default Shop