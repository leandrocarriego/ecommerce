import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  getDocs,
  collection,
  documentId,
  query,
  where,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [buyerInput, setBuyerInput] = useState({
    name: "",
    phone: 0,
    direction: "",
  });

  const { cart, totalPrice, totalItems } = useContext(CartContext);

  const handleOnChangeName = (e) => {
    setBuyerInput({ ...buyerInput, name: e.target.value });
  };

  const handleOnChangePhone = (e) => {
    setBuyerInput({ ...buyerInput, phone: e.target.value });
  };

  const handleOnChangeDirection = (e) => {
    setBuyerInput({ ...buyerInput, direction: e.target.value });
  };


  const handleConfirm = async (e) => {
    e.preventDefault();
    const objOrder = {
      buyer: buyerInput,
      items: cart,
      total: totalPrice(),
    };

    const idsInCart = cart.map((product) => product.id);

    const productsRef = query(
      collection(db, "products"),
      where(documentId(), "in", idsInCart)
    );

    const productsAddedFromFirestore = await getDocs(productsRef);

    const { docs } = productsAddedFromFirestore;

    const batch = writeBatch(db);
    const outOfStock = [];

    docs.forEach(async (doc) => {
      const dataDoc = doc.data();
      const stockDb = dataDoc.stock;

      const productAddeToCart = cart.find((product) => product.id === doc.id);
      const productQuantity = productAddeToCart?.quantity;

      if (stockDb >= productQuantity) {
        batch.update(doc.ref, { stock: stockDb - productQuantity });
      } else {
        outOfStock.push({ id: doc, ...dataDoc });
      }

      if (outOfStock.length === 0) {
        batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
      } else {
        console.log("Hay productos sin stock disponible");
      }
    });
  };

  return (
    <div className="text-white vh-100">
      <h2>Checkout</h2>
      {orderId ? (
        <div>
          <h3>¡Su compra se realizo con exito!</h3>
          <h3>El codigo de su compra es: {orderId}</h3>
        </div>
      ) : totalItems === 0 ? (
        <h3>No hay productos en el carrito</h3>
      ) : (
        <form onSubmit={handleConfirm} className="text-white w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              value={buyerInput.name}
              onChange={handleOnChangeName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">
              Telefono:
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              value={buyerInput.phone}
              onChange={handleOnChangePhone}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputDirection" className="form-label">
              Direccion:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputDirection"
              value={buyerInput.direction}
              onChange={handleOnChangeDirection}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
