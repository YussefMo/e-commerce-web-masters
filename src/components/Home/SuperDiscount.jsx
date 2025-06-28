import { useEffect, useState, useContext } from 'react';
import { getAllProducts } from '../../lib/products.api';
import ProductWithPriceCard from './ProductCards/ProductWithPriceCard';
import Spinner from '../Spinner';
import ProductQuickView from '../Shop/Products/ProductQuickView';
import { ShopContext } from '../../context/ShopContext';

function SuperDiscount() {
  const [products, setProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { relatedProduct, relatedProducts } = useContext(ShopContext);

  useEffect(() => {
    if (quickViewProduct) {
      relatedProduct(quickViewProduct.category.id, quickViewProduct.id);
    }
  }, [quickViewProduct, relatedProduct]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        setProducts(allProducts.slice(7, 17)); // Get 10 products from index 7 to 17
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mb-10">
      <div className="w-full bg-[#FBEACF] py-3 text-center text-3xl">
        <span className="font-semibold">SUPER DISCOUNT FOR YOUR</span>
        <span className="font-bold"> FIRST PURCHASE.</span>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {!products ? (
          <Spinner />
        ) : (
          products.map((product) => (
            <ProductWithPriceCard
              key={product.id}
              product={product}
              onQuickView={() => setQuickViewProduct(product)}
            />
          ))
        )}
      </div>

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

export default SuperDiscount;
