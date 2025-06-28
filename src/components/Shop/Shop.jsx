import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import Pagination from '../Pagination';
import Categories from './Categories';
import Products from './Products/Products';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Shop() {
  const { getAllData, getProductsByCategory, currentPage, totalPages } = useContext(ShopContext);
  const query = useQuery();
  const page = parseInt(query.get('page') || '1', 10);
  const categoryId = query.get('category');

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId);
    } else {
      getAllData(page);
    }
  }, [page, categoryId]);

  return (
    <div className="container mx-auto px-4">
      {/* title */}
      <div className="title py-2">
        <p className="text-xs font-semibold uppercase">
          Home
          <span className="text-graycolor ps-1">&gt; Products</span>
        </p>
      </div>

      {/* container of Page */}
      <div className="container my-5 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
        {/* categoriy */}
        <div className="">
          <Categories />
        </div>

        {/* Products */}
        <div className="md:col-span-2 lg:col-span-3">
          <Products />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
