import ShopNowCard from './shop-now/ShopNowCard';
import bacolaBanner11 from '../../../public/bacola-banner-11.jpg.svg';
import bacolaBanner12 from '../../../public/bacola-banner-12.jpg.svg';

function ShopNow() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ShopNowCard
          imageUrl={bacolaBanner11}
          discountText="WEEKEND DISCOUNT 40%"
          title="Cookie and Ice Cream"
          subtitle="Bacola Weekend Discount"
          buttonColor="blue"
        />
        <ShopNowCard
          imageUrl={bacolaBanner12}
          discountText="WEEKEND DISCOUNT 40%"
          title="Cookie and Ice Cream"
          subtitle="Bacola Weekend Discount"
          buttonColor="red"
        />
      </div>
    </div>
  );
}

export default ShopNow;
