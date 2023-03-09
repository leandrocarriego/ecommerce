import "./NavBar.css";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="brand">Ecommerce</h1>
      <div className="list-container">
        <ul className="nav-list">
          <li><Button label={"Home"}/></li>
          <li><Button label={"About"}/></li>
          <li><Button label={"Products"}/></li>
          <li><Button label={"Contact"}/></li>
        </ul>
        <CartWidget initial={3} />
      </div>
    </nav>
  );
};

export default NavBar;
