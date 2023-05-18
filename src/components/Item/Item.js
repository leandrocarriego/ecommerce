import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, price, img }) => {
  return (
    <div className="card my-3">
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6>{`$${price}`}</h6>
      </div>
      <div className="card-body">
        <Link className="btn btn-secondary" to={`/item/${id}`}>
          ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;

{
  /* <div className="card-product">
      <div className="card-header">
        <h2 className="title">{name}</h2>
        <h3 className="price">{price}</h3>
      </div>
      <div className="img-container">
        <img src={img} alt="name" />
      </div>
      <button className="btn-detail" label="ver detalles">
        <Link to={`/item/${id}`}>
          ver detalles
        </Link>
      </button>
    </div> */
}
