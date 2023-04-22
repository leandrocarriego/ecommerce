import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(product => {
        return <Item {...product} />
      })}
    </div>
  )
}

export default ItemList
