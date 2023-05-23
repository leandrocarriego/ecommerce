import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    } else {
      console.log("El producto ya esta agregado");
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const removeFromCart = (id) => {
    const cartUpdate = cart.filter((product) => product.id !== id);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    let totalPrice = 0;
    cart.map((product) => (totalPrice += product.price * product.quantity));
    return totalPrice;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    cart.forEach((product) => (totalItems += product.quantity));
    return totalItems;
  };

  const totalItems = getTotalItems();

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addItem,
        isInCart,
        totalPrice,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
