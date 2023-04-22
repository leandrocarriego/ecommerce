import { useEffect, useState } from "react";
import { getProducts } from "../../AsyncMock";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList products={products}/>
    </>
  );
};

export default ItemListContainer;
