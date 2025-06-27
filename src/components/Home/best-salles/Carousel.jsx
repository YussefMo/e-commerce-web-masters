import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { getAllProducts } from '../../../lib/products.api';
import ProductCardWithAdd from '../ProductCards/ProductCardWithAdd';
import Spinner from '../../Spinner';

function Carousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  if (!products) return <Spinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCardWithAdd product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
