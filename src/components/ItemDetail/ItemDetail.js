import React from 'react'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'



export const ItemDetail = ({id, name, price, img, description, stock}) => {

  const { cart, addItem, totalPrice, totalItems, removeFromCart, clearCart } = useContext(CartContext)
  const [ productQuantity, setProductQuantity ] = useState(0)
  
  const handleOnAdd = (quantity) => {
    const objProduct = {
      id, name, price, quantity
    }
    setProductQuantity(quantity)
    addItem(objProduct)
  }

  const handleRemove = () => {
    removeFromCart(id)
  }
 
  return (
    <div className="text-white">
      <div className='bg-secondary mx-auto py-3 w-75'>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>$ {price}</h3>
        <h4>stock: {stock}</h4>
        <div className='w-50 mx-auto'>
          {/* {
            productQuantity > 0 ? (
              <Link to='/cart'>Terminar compra</Link>
            ) : (
              <ItemCount handleOnAdd={handleOnAdd} stock={stock}/>
            )
          } */}
          <ItemCount handleOnAdd={handleOnAdd} stock={stock}/>
          <button onClick={totalPrice} >Calcular precio total</button>
          <button onClick={totalItems} >Calcular items totales</button>
          <button onClick={handleRemove} >Remover del carrito</button>
          <button onClick={clearCart} >Limpiar carrito</button>
        </div>
      </div>
    </div>
  )
}


