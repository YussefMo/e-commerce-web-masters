import DealOfTheWeek from './discount/DealOfTheWeek';
import OtherDiscount from './discount/OtherDiscount';

function Discounts() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div>
        <DealOfTheWeek />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:p-8 md:col-span-2">
        <OtherDiscount />
      </div>
    </div>
  );
}

export default Discounts;
