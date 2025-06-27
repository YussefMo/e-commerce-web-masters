import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../lib/products.api';
import Spinner from '../../Spinner';
import ProductWithPriceCard from '../ProductCards/ProductWithPriceCard';

function OtherDiscount() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        // Get products from index 2 to 8 (6 products)
        const selectedProducts = allProducts.slice(2, 8);
        setProducts(selectedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {!products ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <ProductWithPriceCard key={product.id} product={product} />
        ))
      )}
    </>
  );
}

export default OtherDiscount;
