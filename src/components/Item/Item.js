import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <img src={img} alt="name" />
      <button label="ver detalles">
        <Link to={`/item/${id}`}>
          ver detalles
        </Link>
      </button>
    </div>
  );
};

export default Item;
