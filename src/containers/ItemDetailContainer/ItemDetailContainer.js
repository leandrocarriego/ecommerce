import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((snapshot) => {
        const data = snapshot.data();
        const productAdapted = { id: snapshot.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error();
      })
      .finally(setLoading(false));
  }, [itemId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
