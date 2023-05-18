import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ id, name, price, img }) => {
  return (
    <div className="card-product">
      <h2 className="title">{name}</h2>
      <h3 className="price">{price}</h3>
      <div className="img-container">
        <img src={img} alt="name" />
      </div>
      <button className="btn-detail" label="ver detalles">
        <Link to={`/item/${id}`}>
          ver detalles
        </Link>
      </button>
    </div>
  );
};

export default Item;
