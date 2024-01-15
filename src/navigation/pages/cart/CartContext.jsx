// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 0) + 1;
    // Implement logic to increase quantity
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity -= 1;
    // Implement logic to decrease quantity
  };
}


  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, increaseQuantity, removeItem }}>
       {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
