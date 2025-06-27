export const getInitialCartState = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    const parsed = savedCart ? JSON.parse(savedCart) : null;
    if (parsed && Array.isArray(parsed.items)) {
      return parsed;
    }
  } catch (error) {
    console.error("Invalid cart in localStorage:", error);
  }
  // fallback to safe default
  return { items: [] };
};

  
  export function cartReducer(state, action) {
    let updatedItems;
  
    switch (action.type) {
      case "ADD_ITEM": {
        const { id, quantity = 1, ...rest } = action.payload;
        const existingItem = state.items.find(item => item.id === id);
  
        if (existingItem) {
          updatedItems = state.items.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          updatedItems = [...state.items, { id, quantity, ...rest }];
        }
  
        break;
      }
  
      case "REMOVE_ITEM":
        updatedItems = state.items.filter(item => item.id !== action.payload);
        break;
  
      case "INCREMENT_QUANTITY":
        updatedItems = state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        break;
  
      case "DECREMENT_QUANTITY":
        updatedItems = state.items
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0);
        break;
  
      case "CLEAR_CART":
        updatedItems = [];
        break;
  
      default:
        return state;
    }
  
    const newState = { items: updatedItems };
    localStorage.setItem("cart", JSON.stringify(newState));
    return newState;
  }
  