import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/cart")}>
      <i className="bi bi-cart ">{totalItems}</i>
    </div>
  );
};

export default CartWidget;
