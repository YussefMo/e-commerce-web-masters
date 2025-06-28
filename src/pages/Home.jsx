import BestSealers from '../components/Home/BestSealers';
import BlogShop from '../components/Home/BlogShop';
import Category from '../components/Home/Category';
import Discounts from '../components/Home/Discounts';
import Hero from '../components/Home/Hero';
import ShopNow from '../components/Home/ShopNow';
import SuperDiscount from '../components/Home/SuperDiscount';


function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-[1200px] px-3">
          <Category />
          <Discounts />
          <ShopNow />
          <BestSealers />
          <SuperDiscount />
          <BlogShop />
        
      </div>
    </>
  );
}

export default Home;
