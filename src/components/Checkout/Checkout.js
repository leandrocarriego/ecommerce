import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);

  const handleConfirm = (userData) => {
    const objOrder = {
      buyer: {
        name: "",
        phone: 1,
        direction: "",
      },
      items: cart,
      total: totalPrice,
    };
    const db = getFirestore();
    const ordersColection = collection(db, "orders");
    addDoc(ordersColection, objOrder).then(({ id }) => setOrderId(id));
    console.log(objOrder);
  };

  return (
    <div className="text-white vh-100">
      <h2>Checkout</h2>
      <form onConfirm={handleConfirm} className="text-white w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
