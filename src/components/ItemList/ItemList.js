import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-6 col-lg-4">
              <Item {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
