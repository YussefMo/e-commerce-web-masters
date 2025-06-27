function ProductWithPriceCard({ product }) {
  const { title, price, images } = product;
  const discountedPrice = (price * 0.82).toFixed(2); // 18% discount

  return (
    <div className="overflow-hidden border-1 border-gray-300 bg-white py-5">
      <div className="relative">
        <img
          src={images[0]}
          alt={title}
          className="mx-auto h-50 w-9/10 object-cover"
          loading="lazy"
        />
        <div className="bg-primaryColor absolute top-2 left-2 rounded-md px-2 py-1 text-sm text-white">
          18% OFF
        </div>
      </div>
      <div className="p-2 px-4">
        <h3 className="mb-2 truncate text-lg font-semibold">{title}</h3>
        <div className="flex flex-col justify-between gap-2">
          <p className="text-primaryColor">In stock</p>
          <div className="text-yellow-500">
            ★★★★☆ <span className="text-gray-300">1 review</span>
          </div>
          <div className="flex items-baseline">
            <span className="mr-2 text-sm text-gray-500 line-through">
              ${price}
            </span>
            <span className="text-xl font-bold text-red-600">
              ${discountedPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductWithPriceCard;
