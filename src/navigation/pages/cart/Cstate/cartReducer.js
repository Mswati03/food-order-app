// Initial State
const initialState = {
    cart: [],
  };
  
  // Reducer
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, count: 1 }],
        };
      case 'INCREMENT_COUNT':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, count: item.count + 1 } : item
          ),
        };
      case 'DECREMENT_COUNT':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, count: Math.max(1, item.count - 1) } : item
          ),
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  }
  
  export default cartReducer;