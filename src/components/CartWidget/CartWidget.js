import "./CartWidget.css";

const CartWidget = (props) => {
    return (
        <i class="bi bi-cart">
            {props.initial}
        </i>
    )
}

export default CartWidget;