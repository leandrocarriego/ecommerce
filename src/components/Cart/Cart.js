import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const {
    cart,
    totalPrice,
    totalItems,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className="text-white vh-100">
      <h2>Carrito</h2>
      {totalItems == 0 ? (
        <h3>No hay productos en el carrito: </h3>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center w-50 mx-auto">
          <h3>Productos en el carrito: </h3>
          <ul className="list-group">
            {cart.map((product) => {
              return (
                <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center gap-4">
                  
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      X
                    </button>
                </li>
              );
            })}
          </ul>
          <p>Total compra: {totalPrice()}</p>
          <div className="d-flex justify-content-center align-items-center gap-4">
              <Link className="btn btn-success" to="/checkout">
                Terminar compra
              </Link>
              <button className="btn btn-danger" onClick={clearCart}>
              Vaciar carrito
              </button>
            </div>
          
          
        </div>
      )}
    </div>
  );
};

export default Cart;
