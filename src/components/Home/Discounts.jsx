import { useState, useContext, useEffect } from 'react';
import DealOfTheWeek from './discount/DealOfTheWeek';
import OtherDiscount from './discount/OtherDiscount';
import ProductQuickView from '../Shop/Products/ProductQuickView';
import { ShopContext } from '../../context/ShopContext';

function Discounts() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { relatedProduct, relatedProducts } = useContext(ShopContext);

  useEffect(() => {
    if (quickViewProduct) {
      relatedProduct(quickViewProduct.category.id, quickViewProduct.id);
    }
  }, [quickViewProduct, relatedProduct]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <DealOfTheWeek onQuickView={setQuickViewProduct} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:p-8 md:col-span-2">
          <OtherDiscount onQuickView={setQuickViewProduct} />
        </div>
      </div>
      <div>
        {quickViewProduct && (
          <ProductQuickView
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            relatedProducts={relatedProducts}
          />
        )}
      </div>
    </>
  );
}

export default Discounts;
