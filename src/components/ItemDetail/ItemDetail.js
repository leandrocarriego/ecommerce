import React from "react";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({ id, name, price, img, description, stock }) => {
  const {
    addItem,
    isInCart,
    removeFromCart,
  } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    const objProduct = {
      id,
      name,
      price,
      quantity,
    };
    setProductQuantity(quantity);
    addItem(objProduct);
  };

  return (
    <div className="text-white">
      <div className="bg-secondary mx-auto py-3 w-75">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>$ {price}</h3>
        <h4>stock: {stock}</h4>
        <div className="w-50 mx-auto">
          {isInCart(id) ? (
            <div className="d-flex justify-content-center align-items-center gap-4">
              <Link className="btn btn-success" to="/cart">
                Terminar compra
              </Link>
              <button className="btn btn-danger" onClick={() => removeFromCart(id)}>
                Remover del carrito
              </button>
            </div>
          ) : (
            <ItemCount handleOnAdd={handleOnAdd} stock={stock} />
          )}
        </div>
      </div>
    </div>
  );
};
