import React from 'react';
import {NavLink} from "react-router-dom";

const MobileMenu = () => {
    return (
        <>
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close">
                        <i className="icon-close"/>
                    </span>
                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search"
                               placeholder="Search in..." required/>
                        <button className="btn btn-primary" type="submit">
                            <i className="icon-search"/>
                        </button>
                    </form>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <NavLink to="/index.html">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product">Sản phẩm</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* End .mobile-nav */}
                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook">
                            <i className="icon-facebook-f"/>
                        </a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter">
                            <i className="icon-twitter"/>
                        </a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram">
                            <i className="icon-instagram"/>
                        </a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube">
                            <i className="icon-youtube"/>
                        </a>
                    </div>
                    {/* End .social-icons */}
                </div>
                {/* End .mobile-menu-wrapper */}
            </div>
            {/* End .mobile-menu-container */}
        </>
    );
};

export default MobileMenu;
