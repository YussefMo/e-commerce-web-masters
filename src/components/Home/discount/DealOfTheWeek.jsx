import { useState, useEffect } from 'react';
import { getAllProducts } from '../../../lib/products.api';
import Spinner from '../../Spinner';

function DealOfTheWeek() {
  const [firstProduct, setFirstProduct] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [targetDate] = useState(
    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getAllProducts();
        if (products && products.length > 0) {
          setFirstProduct(products[0]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        newTimeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      setTimeLeft(newTimeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!firstProduct) {
    return <Spinner />;
  }

  const originalPrice = firstProduct.price;
  const discountedPrice = (originalPrice * 0.82).toFixed(2); // Assuming 18% discount

  return (
    <div className="mx-auto my-8 max-w-md rounded-lg border-2 border-red-300 p-4 px-7">
      <div className="mb-4 text-xl font-bold text-blue-800">
        Deals of the week!
      </div>
      <div className="mb-4 flex space-x-2">
        <span className="rounded bg-red-500 px-3 py-1 text-white">
          {String(timeLeft.days).padStart(2, '0')}
        </span>
        <span className="text-gray-600">:</span>
        <span className="rounded bg-red-500 px-3 py-1 text-white">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-gray-600">:</span>
        <span className="rounded bg-red-500 px-3 py-1 text-white">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-gray-600">:</span>
        <span className="rounded bg-red-500 px-3 py-1 text-white">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
      <div className="mb-6 text-sm text-gray-500">
        Remains until the end of the offer
      </div>

      <div className="relative mb-6">
        <div className="absolute top-0 left-0 -mt-4 -ml-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
          18%
        </div>
        <img
          src={firstProduct.images[0]}
          alt={firstProduct.title}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="mb-2 flex items-baseline">
        <span className="mr-2 text-gray-500 line-through">
          ${originalPrice}
        </span>
        <span className="text-2xl font-bold text-red-600">
          ${discountedPrice}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{firstProduct.title}</h3>
      <p className="mb-2 text-sm font-semibold text-green-600">79 IN STOCK</p>
      <div className="mb-4 flex items-center">
        <span className="text-yellow-500">★★★★☆</span>
        <span className="ml-2 text-gray-600">1 review</span>
      </div>

      <div className="relative pt-1">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <span className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-600 uppercase">
              AVAILABLE:
            </span>
          </div>
          <div className="text-right">
            <span className="inline-block text-xs font-semibold text-blue-600">
              79
            </span>
          </div>
        </div>
        <div className="mb-4 flex h-2 overflow-hidden rounded bg-gray-200 text-xs">
          <div
            style={{ width: '80%' }}
            className="flex flex-col justify-center bg-gradient-to-r from-red-500 to-yellow-500 text-center whitespace-nowrap text-white shadow-none"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default DealOfTheWeek;
