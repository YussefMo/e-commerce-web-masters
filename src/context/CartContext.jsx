import { createContext, useContext, useReducer } from "react";
import { cartReducer, getInitialCartState } from "../reducers/cartReducer";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, getInitialCartState);

  const distinctItemCount = state.items.length;

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addItem = (item, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity } });
    toast.success(`${item.title} added to cart`);
  };

  const removeItem = id => {
    const item = state.items.find(i => i.id === id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
    toast.info(`${item?.title || "Item"} removed from cart`);
  };

  const incrementQuantity = id => {
    const item = state.items.find(i => i.id === id);
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
    toast.success(`Increased quantity of ${item?.title || "item"}`);
  };

  const decrementQuantity = id => {
    const item = state.items.find(i => i.id === id);
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
    toast.warn(`Decreased quantity of ${item?.title || "item"}`);
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.error("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        distinctItemCount,
        totalPrice,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
