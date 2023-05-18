import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, handleOnAdd}) => {
    const [ count, setCount ] = useState(1)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev > 1 ? prev - 1 : 1)
    }


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => handleOnAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
