import {footImg1, footImg2, footImg3, footImg4} from './../../assets/index';

function MiddleFooter() {
  const fruitsAndVegetables = ['Fresh Vegetables', 'Herbs & Seasonings', 'Fresh Fruits', 'Cuts & Sprouts', 'Exotic Fruits & Veggies', 'Packaged Produce', 'Party Trays'];
  const breakfastAndDairy = ['Milk & Flavoured Milk', 'Butter and Margarine', 'Cheese', 'Eggs Substitutes', 'Honey', 'Marmalades', 'Sour Cream and Dips', 'Yogurt'];
  const meatAndSeafood = ['Breakfast Sausage', 'Dinner Sausage', 'Beef', 'Chicken', 'Sliced Deli Meat', 'Shrimp', 'Wild Caught Fillets', 'Crab and Shellfish', 'Farm Raised Fillets'];
  const beverages = ['Water', 'Sparkling Water', 'Soda & Pop', 'Coffee', 'Milk & Plant-Based Milk', 'Tea & Kombucha', 'Drink Boxes & Pouches', 'Craft Beer', 'Wine'];
  const breadsAndBakery = ['Milk & Flavoured Milk', 'Butter and Margarine', 'Cheese', 'Eggs Substitutes', 'Honey', 'Marmalades', 'Sour Cream and Dips', 'Yogurt'];
  return (
    <div className="bg-[#F7F8FD]">
      <div className="container mx-auto px-4">
        <div className='py-5 border-b border-b-[#E4E5EE]'>
          <ul className='grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-4'>
            <li className='text-xs text-blackColor flex items-center gap-2 lg:place-content-center'>
                <img src={footImg1} alt="img" width={18} height={18} />
                <span>Everyday fresh products</span>
            </li>
            <li className='text-xs text-blackColor flex items-center gap-2 lg:place-content-center'>
                <img src={footImg2} alt="img" width={18} height={18} />
                <span>Free delivery for order over $70</span>
            </li>
            <li className='text-xs text-blackColor flex items-center gap-2 lg:place-content-center'>
                <img src={footImg3} alt="img" width={18} height={18} />
                <span>Daily Mega Discounts</span>
            </li>
            <li className='text-xs text-blackColor flex items-center gap-2 lg:place-content-center'>
                <img src={footImg4} alt="img" width={18} height={18} />
                <span>Best price on the market</span>
            </li>
          </ul>
        </div>
        <div className='py-5 flex flex-wrap gap-16 px-4'>
          <div className='flex flex-col gap-3'>
            <h4 className='text-black font-semibold text-sm'>FRUIT & VEGETABLES</h4>
            <ul className='flex flex-col gap-1'>
              {
                fruitsAndVegetables.map((item, index) =>
                  <li key={index} className='text-blackColor text-xs'>
                    {item}
                  </li>
                )
              }
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='text-black font-semibold text-sm'>BREAKFAST & DAIRY</h4>
            <ul className='flex flex-col gap-1'>
              {
                breakfastAndDairy.map((item, index) =>
                  <li key={index} className='text-blackColor text-xs'>
                    {item}
                  </li>
                )
              }
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='text-black font-semibold text-sm'>HEAT & SEAFOOO</h4>
            <ul className='flex flex-col gap-1'>
              {
                meatAndSeafood.map((item, index) =>
                  <li key={index} className='text-blackColor text-xs'>
                    {item}
                  </li>
                )
              }
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='text-black font-semibold text-sm'>BEVERAGES</h4>
            <ul className='flex flex-col gap-1'>
              {
                beverages.map((item, index) =>
                  <li key={index} className='text-blackColor text-xs'>
                    {item}
                  </li>
                )
              }
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='text-black font-semibold text-sm'>BREADS & BAKERY</h4>
            <ul className='flex flex-col gap-1'>
              {
                breadsAndBakery.map((item, index) =>
                  <li key={index} className='text-blackColor text-xs'>
                    {item}
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleFooter