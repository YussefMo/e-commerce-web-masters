import { FaStar } from 'react-icons/fa';
import { useCart } from '../../../context/CartContext';

function Item({ el, onQuickView }) {
  const { cartItems, addItem, incrementQuantity, decrementQuantity } =
    useCart();
  const cartItem = cartItems.find((item) => item.id === el.id);
  const count = cartItem ? cartItem.quantity : 0;

  function handelCount(state) {
    if (state === 'plus') {
      if (count === 0) {
        addItem(el);
      } else {
        incrementQuantity(el.id);
      }
    } else {
      if (count > 0) {
        decrementQuantity(el.id);
      }
    }
  }

  return (
    <div className="card border-x border-b border-[#EDEEF5] p-5">
      <div className="img my-5 cursor-pointer p-3" onClick={onQuickView}>
        <img
          src={el.images[0] || el.category.image}
          alt=""
          className="h-full w-full rounded-2xl"
        />
      </div>

      <p className="mb-2 text-sm font-medium text-[#202435]">
        {' '}
        {el.title.split(' ').splice(0, 2).join(' ')}{' '}
      </p>

      <span style={{ color: '#00B853' }}>In stock</span>

      <p className="my-2 flex items-center text-xs text-[#FFCD00]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span className="ms-2 text-[#71778E]">1 review</span>
      </p>

      <p className="font-bold text-[#D51243]">${el.price} </p>

      <div className="my-2 flex w-full items-center justify-center overflow-hidden rounded-3xl border border-[#EDEEF5]">
        <span
          className="w-1/4 cursor-pointer bg-gray-200 p-1 text-center"
          onClick={() => handelCount('min')}
        >
          -
        </span>
        <span className="w-1/2 text-center"> {count} </span>
        <span
          className="w-1/4 cursor-pointer bg-[#FFCD00] p-1 text-center"
          onClick={() => handelCount('plus')}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default Item;
