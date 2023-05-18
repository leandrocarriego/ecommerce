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
      <div className="card-body ">
        <h6 className="card-title">{name}</h6>
        <h3>{`$${price}`}</h3>
      </div>
      <div className="card-body ">
        <ItemCount stock={1} handleOnAdd={0} />
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
