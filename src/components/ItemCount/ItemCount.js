import React from 'react'
import { useState } from 'react'

const ItemCount = ({handleOnAdd, stock}) => {
    const [ count, setCount ] = useState(1)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev > 1 ? prev - 1 : 1)
    }


  return (
    <div className='m-2'>
      <div className='d-flex justify-content-evenly align-items-center w-100 py-3'>
        <button className="btn btn-dark" onClick={decrement}>-</button>
        <h3>{count}</h3>
        <button className="btn btn-dark" onClick={increment}>+</button>
      </div>
      <button className="btn btn-success" onClick={() => handleOnAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
