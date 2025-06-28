import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/cart/cartItem";

const Cart = () => {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  } = useCart();

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-10 border-t pt-6">
        <div className="text-xl font-semibold">
          Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="cursor-pointer bg-primaryColor text-white px-6 py-2 rounded-md transition duration-200"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};



export default Cart;
