import { FaStar } from 'react-icons/fa';

function ProductCardWithAdd({ product }) {
  const discountPercentage = 15;
  const discountedPrice = product.price * (1 - discountPercentage / 100);

  return (
    <div className="relative m-2 flex w-full max-w-xs flex-col overflow-hidden border border-gray-300 bg-white h-[450px]">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="w-full object-cover"
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
        />
        <span className="bg-primaryColor absolute top-0 left-0 m-2 rounded-md px-2 text-center text-sm font-medium text-white">
          {discountPercentage}% OFF
        </span>
      </div>
      <div className="mt-4 space-y-2 px-5 pb-5">
        <button className="text-left">
          <h5 className="font-bold tracking-tight text-slate-900">
            {product.title}
          </h5>
        </button>
        <p className="text-primaryColor text-sm">IN STOCK</p>
        <div className="flex items-center">
          <FaStar className="h-3 w-3 text-yellow-300" />
          <FaStar className="h-3 w-3 text-yellow-300" />
          <FaStar className="h-3 w-3 text-yellow-300" />
          <FaStar className="h-3 w-3 text-yellow-300" />
          <FaStar className="h-3 w-3 text-gray-300" />
          <span className="ml-2 text-gray-400">1 review</span>
        </div>
        <div className="mb-5 flex items-center justify-between">
          <p className="space-x-3">
            <span className="text-sm text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-lg font-bold text-red-500">
              ${discountedPrice.toFixed(2)}
            </span>
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-full bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default ProductCardWithAdd;
