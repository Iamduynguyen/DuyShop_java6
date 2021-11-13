import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuthenticated } from "auth";
import { useLocation } from "react-router-dom";
import { signout } from "../../auth";
import "../website/assets/css/fontawesome.min.css";
import "../website/assets/css/custom.css";
import "../website/assets/css/templatemo.css";
import "../website/assets/css/bootstrap.min.css";
import "../website/assets/img/favicon.ico";
import "../website/assets/img/apple-icon.png";
import "../website/assets/css/style.css";
import image from "../website/assets/img/banner_img_01.jpg";
import { useForm } from "react-hook-form";

const Header = (props) => {
  const {
    register,
    handleSubmit,
  } = useForm();
  
  const onSubmit = async (value) => {   
    try {
       
      props.onSearch(value);
    } catch (error) {
        console.log(error);
    } 
        
    history.push('/shop')
    
  }

  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // console.log(isAuthenticated().username);
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged]);

  // check login để render lại menu
  const checkLogin = () => {
    if (pathname !== "/signin" && isLogged && isAuthenticated().id==1) {
      return (
        <>
          <NavLink
            to="/admin/dashboard"
            className="text-decoration-none text-uppercase"
          >
            {isAuthenticated().username}
          </NavLink>
          <NavLink
            className="ms-4 text-decoration-none"
            to="/"
            onClick={() =>
              signout(() => {
                history.push("/");
                setIsLogged(false);
              })
            }
          >
            Sign out
          </NavLink>
        </>
      );
    }else if (pathname !== "/signin" && isLogged && isAuthenticated().id!=1) {
      return (
        <>
          <NavLink
            to="/user"
            className="text-decoration-none text-uppercase"
          >
            {isAuthenticated().username}
          </NavLink>
          <NavLink
            className="ms-4 text-decoration-none"
            to="/"
            onClick={() =>
              signout(() => {
                history.push("/");
                setIsLogged(false);
              })
            }
          >
            Sign out
          </NavLink>
        </>
      );
    } 
    else if (pathname === "/signin" && isLogged) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <NavLink className="text-decoration-none" to="/signin">
            Sign in
          </NavLink>
          {/* <span className="ms-1">|</span> */}
          <NavLink className="ms-4 text-decoration-none" to="/signup">
            Sign up
          </NavLink>
        </>
      );
    }
  };
  return (
    <div className="" >
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light shadow fixed-css  bg-body " >
        <div className="container d-flex justify-content-between align-items-center">
          <Link
            className=" text-success text-decoration-none logo h1 align-self-center"
            to="/"
          >
            Zay
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item " style={{marginTop:'5px'}}>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="" style={{display:'flex'}}>
                      <input
                        type="search" name="name"
                        className="form-control form-sm" 
                        style={{padding:'0px',width:'200px'}}
                        {...register("name")}
                      />
                      <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fas fa-search" />
                    </button>
                    </div>
                    
                  
                  </form>
                  </li>
                  
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search" />
                  </div>
                </div>
              </div>
              <Link className="nav-icon position-relative text-decoration-none" to="/cart">
        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
        {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span> */}
      </Link>
              {checkLogin()}
            </div>
          </div>
        </div>
      </nav>
      {/* Close Header */}
      

      
    </div>

  );
};

export default Header;
