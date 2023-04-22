import React from 'react'

export const ItemDetail = ({name, price, img, description, stock}) => {
  return (
    <div>
      <img src={img} alt={name}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
      <h4>stock{stock}</h4>
    </div>
  )
}


