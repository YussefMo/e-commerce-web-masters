import { useState, useContext, useEffect } from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { ShopContext } from '../../../context/ShopContext';

function ProductQuickView({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  const images = product?.images || [product?.category?.image || ''];
  const [view, setView] = useState(images[0]);
  const { relatedProduct, relatedProducts } = useContext(ShopContext);
  const [showFull, setShowFull] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleReadMore = () => {
    setShowFull(true);
  };

  // Handle scroll to update arrow visibility
  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < maxScroll - 1);
  };

  // Handle arrow clicks
  const scrollLeft = () => {
    const container = document.getElementById('related-products-container');
    container.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('related-products-container');
    container.scrollBy({ left: 200, behavior: 'smooth' });
  };

  //get related items
  useEffect(() => {
    if (product?.category?.id && product?.id) {
      relatedProduct(product.category.id, product.id);
    }
  }, [product]);

  // Update arrow visibility
  useEffect(() => {
    const container = document.getElementById('related-products-container');
    if (container && relatedProducts?.length) {
      // Reset scroll position
      container.scrollLeft = 0;
      setShowLeftArrow(false);
      
      // if right arrow should be shown
      setTimeout(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        setShowRightArrow(maxScroll > 0);
      }, 100);
    }
  }, [relatedProducts]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative max-h-[90vh] w-[90%] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:w-[80%] lg:w-[70%]">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 transition hover:text-gray-800"
        >
          &times;
        </button>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left side */}
          <div className="flex flex-col gap-4 lg:flex-row lg:w-1/2">
            {/* thumbnails */}
            <div className="flex gap-3 lg:flex-col lg:w-20">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => setView(img)}
                  className={`h-16 w-16 cursor-pointer rounded-lg border-2 object-cover ${
                    view === img ? 'border-primaryColor' : 'border-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* main image */}
            <div className="flex-1 flex justify-center">
              <img
                src={view}
                alt={product?.title}
                className="h-80 w-80 rounded-xl border bg-white object-contain shadow"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 lg:w-1/2">
            {/* title & price */}
            <h2 className="mb-2 text-2xl font-semibold text-[#202435]">
              {product?.title}
            </h2>
            <p className="mb-4 text-xl font-bold text-black">
              ${product?.price?.toFixed(2)} – ${(product?.price + 10)?.toFixed(2)}
            </p>

            
            <p className="mb-4 text-sm font-medium">Available In:</p>

            {/* size selector */}
            <div className="mb-4 flex gap-2">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-md border px-3 py-1.5 text-sm capitalize transition ${
                    selectedSize === size
                      ? 'border-primaryColor bg-primaryColor text-white'
                      : 'border-gray-300 text-gray-600 hover:border-primaryColor'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* quantity */}
            <div className="mb-6 flex items-center w-32">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="rounded-l border border-gray-300 bg-gray-50 p-2 hover:bg-gray-100"
              >
                <FiMinus />
              </button>
              <span className="border-y border-gray-300 px-4 py-2 bg-white text-center flex-1">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="rounded-r border border-gray-300 bg-gray-50 p-2 hover:bg-gray-100"
              >
                <FiPlus />
              </button>
            </div>

            <div className="mb-6 flex flex-col gap-3">
              <button className="bg-primaryColor hover:bg-primaryColor/90 w-full rounded-lg py-3 font-medium text-white transition">
                Add to Cart
              </button>
              <div className="flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                  <FaHeart className="text-gray-400" /> Wishlist
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                  <FaShareAlt className="text-gray-400" /> Share
                </button>
              </div>
            </div>

            {/* tags */}
            <div className="mb-4">
              <span className="text-sm text-gray-500 mr-2">Tags:</span>
              <div className="inline-flex flex-wrap gap-2 text-sm ">
                {['Fast Food', 'Organic Corn', 'Flavoured', 'Dry Food'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-gray-500 border rounded border-gray-300 p-1"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* description */}
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">
                Product Details:
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                {showFull
                  ? product?.description
                  : (product?.description?.slice(0, 250) || '') + '... '}
                {!showFull && product?.description?.length > 250 && (
                  <span
                    className="text-primaryColor cursor-pointer hover:text-primaryColor/90"
                    onClick={handleReadMore}
                  >
                    Read more...
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* related products */}
        <div className="mt-8 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Related products
          </h3>

          <div className="relative">
            {/* Navigation arrows */}
            {showLeftArrow && (
              <button 
                onClick={scrollLeft}
                className="absolute top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-50"
              >
                &#8249;
              </button>
            )}
            
            {showRightArrow && (
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-50 "
              >
                &#8250;
              </button>
            )}

            {/* Products container */}
            <div 
              id="related-products-container"
              className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={handleScroll}
            >
              {relatedProducts?.length ? (
                relatedProducts.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex-shrink-0 w-36 rounded-lg border bg-white p-3 text-center transition hover:shadow-md"
                  >
                    {/* Sale badge*/}
                    <div className="absolute top-2 left-2 bg-primaryColor text-white text-xs px-2 py-1 rounded-full">
                      ON SALE
                    </div>
                    
                    <img
                      src={item.images?.[0]}
                      alt={item.title}
                      className="mb-2 h-20 w-full object-contain"
                    />
                    <p className="text-sm font-bold text-black mb-1">
                      ${item.price}
                    </p>
                    <p className="text-xs text-gray-500 line-through mb-1">
                      ${(item.price * 1.2).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-700 truncate mb-2">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      1 each
                    </p>
                    
                    {/* Add button */}
                    <button className="absolute bottom-2 right-2 bg-primaryColor text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-primaryColor/90">
                      +
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No related products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;