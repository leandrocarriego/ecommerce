import "./Button.css";

const Button = ({ handleClick, label }) => {
    return (
        <button className="button">{label}</button>
    )
}

export default Button;