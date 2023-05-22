import React from 'react'
import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const addItem = ( productToAdd ) => {
        
        if (!isInCart(productToAdd.id)){
            setCart(prev => [prev, productToAdd])
            console.log("El producto fue agregado ", cart)      
     } 
     else{
        console.log("El producto ya esta agregado")
     }
    }

    const isInCart = ( id ) => {
        return cart.some(product => product.id === id)
    }

    const totalPrice = ()  => {
        let total = 0;
        cart.map ( (i) => total += i.price * i.quantity );
        
        console.log("Total de la compra: " + total)
        return total;
      }
    
    const totalItems = () => {
        let cantidad = 0;
        cart.map(i => cantidad += i.quantity);
        console.log("Total de items: " + cantidad)
        return cantidad;
      }

    const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter(item =>{
        return item.id !== id;
    });
    setCart(cartFilter);
    console.log("Se removio el item, el cart quedo asi :", cartFilter)
    }
    
    const clearCart = () => {
        setCart([]);
        console.log("Carrito limpio: ", cart)
    }

  return (
    <CartContext.Provider value={ {cart, addItem, totalPrice, totalItems, removeFromCart, clearCart } } >
        { children }
    </CartContext.Provider>
  )
}

export default CartProvider