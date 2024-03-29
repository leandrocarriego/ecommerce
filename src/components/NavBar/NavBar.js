import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2 className="brand">Ecommerce</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/category/guitarras"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Guitarras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/pianos"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Pianos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/saxofones"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Saxofones
                </NavLink>{" "}
              </li>
            </ul>
            <CartWidget initial={0} />
          </div>
        </div>
      </nav>
    </>

    // <nav className="navbar">
    //     <Link to='/' ><h2 className="brand">Ecommerce</h2></Link>
    //   <div className="list-container">
    //     <ul className="nav-list">
    //       <NavLink to='/category/guitarras' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link' }>Guitarras</NavLink>
    //       <NavLink to='/category/pianos' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link' }>Pianos</NavLink>
    //       <NavLink to='/category/saxofones' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link' }>Saxofones</NavLink>
    //     </ul>
    //     <CartWidget initial={0} />
    //   </div>
    // </nav>
  );
};

export default NavBar;
