import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
  return (
    <div className='items-container'>
      {products.map(product => {
        return <Item key={product.id} {...product} />
      })}
    </div>
  )
}

export default ItemList
