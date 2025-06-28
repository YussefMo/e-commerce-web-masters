import { useContext, useState, useEffect } from 'react';
import banner from '../../../assets/images/bacola-banner-18.jpg.png';
import { ShopContext } from '../../../context/ShopContext';
import Spinner from '../../Spinner';
import Item from './Item';
import Sorting from './Sorting';
import ProductQuickView from './ProductQuickView';

function Products() {
  const { allData, loading, error, relatedProduct, relatedProducts } =
    useContext(ShopContext);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    if (quickViewProduct) {
      relatedProduct(quickViewProduct.category.id, quickViewProduct.id);
    }
  }, [quickViewProduct, relatedProduct]);

  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  return (
    <div className="flex flex-col gap-5">
      {/* Banner >>>> Image */}
      <div className="banner">
        <img
          src={banner}
          alt="img not found"
          className="h-full w-full rounded-xl"
        />
      </div>

      {/* Sorting Products */}
      <Sorting />

      {/* Showing Products */}
      <div className="grid rounded-xl border border-[#EDEEF5] md:grid-cols-2 lg:grid-cols-4">
        {allData.map((el) => (
          <Item
            key={el.id}
            el={el}
            onQuickView={() => setQuickViewProduct(el)}
          />
        ))}
      </div>

      {/* Product Quick View Modal */}
      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          relatedProducts={relatedProducts}
        />
      )}
    </div>
  );
}

export default Products;