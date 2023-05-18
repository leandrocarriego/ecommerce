import React from "react";
import Item from "../Item/Item";
// import './ItemList.css'

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-6 col-lg-4">
              <Item key={product.id} {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
