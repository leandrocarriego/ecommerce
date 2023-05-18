import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, price, img, description, stock}) => {
  const handleOnAdd = (quantity) => {
    const objProduct = {
      id, name, price, quantity
    }
    console.log(objProduct)
  }

  return (
    <div>
      <div>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        <h4>stock{stock}</h4>
      </div>
      <ItemCount handleOnAdd={handleOnAdd} stock={stock}/>
    </div>
  )
}


