import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ id, name, price, img }) => {
  return (
    <div className="card my-3 p-2 vh-100 bg-secondary">
      <div className="h-50 d-flex justify-content-center align-items-center bg-white">
        <img className="card-img-top " src={img} alt={name} />
      </div>
      <div className="card-body h-50 d-flex flex-column justify-content-center align-items-center">
        <h4 className="card-title p-3">{name}</h4>
        <h3 className="p-3">{`$${price}`}</h3>
        <Link className="btn btn-primary" to={`/item/${id}`}>
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
