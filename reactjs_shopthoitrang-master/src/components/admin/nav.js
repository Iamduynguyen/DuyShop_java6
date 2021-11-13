import { isAuthenticated } from "auth";
import { NavLink,Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light  collapse"
    >
      <Link to="/user" style={{marginLeft:'30px',textDecoration:'none'}}>{isAuthenticated().username}</Link> 
      <div className="position-sticky pt-3">
        
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link "
              aria-current="page"
              to="/admin"
            >
              <span data-feather="home" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/category">
              <span data-feather="shopping-cart" />
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/product">
              <span data-feather="shopping-cart" />
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/user">
              <span data-feather="shopping-cart" />
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
