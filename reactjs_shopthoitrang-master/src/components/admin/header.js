import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" >
      <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" to="/">
        Zay Shop
      </NavLink>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
}
