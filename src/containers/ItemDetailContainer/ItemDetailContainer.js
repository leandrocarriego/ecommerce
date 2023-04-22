import React from 'react'
import { useEffect, useState } from "react";
import { getProductsById } from "../../AsyncMock";
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = (  ) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductsById(id).then((product) => {
      setProduct(product);
    });
  }, []);


  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
