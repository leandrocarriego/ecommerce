import "./CartWidget.css";

const CartWidget = (props) => {
    return (
        <i className="bi bi-cart">
            {props.initial}
        </i>
    )
}

export default CartWidget;