import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to='/' ><h2 className="brand">Ecommerce</h2></Link>
      <div className="list-container">
        <ul className="nav-list">
          <NavLink to='/category/guitarras' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link' }>Guitarras</NavLink>
          <NavLink to='/category/pianos' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link' }>Pianos</NavLink>
          <NavLink to='/category/saxofones' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link' }>Saxofones</NavLink>
        </ul>
        <CartWidget initial={0} />
      </div>
    </nav>
  );
};

export default NavBar;
