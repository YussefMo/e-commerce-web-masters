import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sliderImage from '../../../public/slider-image-6.jpg.svg';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: sliderImage,
    title: 'Specialist in the grocery store',
    offer: '-20% OFF',
    price: '$7.99',
    description: "Only this week. Don't miss..."
  },
  {
    id: 2,
    image: sliderImage,
    title: 'Fresh Organic Vegetables',
    offer: '-15% OFF',
    price: '$5.49',
    description: 'Healthy and delicious options.'
  }
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${currentSlide.image})` }}
        >
          <div className="container mx-auto flex h-full items-center justify-between px-4 max-sm:text-center">
            <div className="max-w-md text-left text-black max-sm:text-center">
              <span className="rounded-ful mb-2 inline-block space-x-3 px-2 py-1 text-xs text-black">
                <span>EXCLUSIVE OFFER</span>
                <span className="from-primaryColor rounded-full bg-gradient-to-r to-transparent to-60% p-2 text-[#038E42]">
                  {currentSlide.offer}
                </span>
              </span>
              <h1 className="mb-4 text-5xl font-bold">{currentSlide.title}</h1>
              <p className="mb-4 text-lg">{currentSlide.description}</p>
              <p className="mb-6 text-2xl font-semibold">
                from <span className="text-red-500">{currentSlide.price}</span>
              </p>
              <Link
                to="/shop"
                className="bg-primaryColor flex w-fit items-center rounded-lg px-6 py-3 font-bold text-white hover:bg-green-600 max-sm:mx-auto"
              >
                Shop Now <BiChevronRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="flex-1"></div> {/* Spacer for image on right */}
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all duration-300"
      >
        <BiChevronLeft size={24} className="cursor-pointer text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all duration-300"
      >
        <BiChevronRight size={24} className="cursor-pointer text-gray-800" />
      </button>
    </section>
  );
}

export default Hero;
