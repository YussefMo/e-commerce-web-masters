import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Carousel from './best-salles/Carousel';

function BestSealers() {
  return (
    <div className="mt-5 mb-10">
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-2xl font-bold">Best Sellers</h2>
          <p className="text-gray-400">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <Link
          to="/shop"
          className="flex h-fit items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-1"
        >
          View All <BsArrowRight />
        </Link>
      </div>
      <Carousel />
    </div>
  );
}

export default BestSealers;
