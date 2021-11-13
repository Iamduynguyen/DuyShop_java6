import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const NavBarHeader = ({listCategories, cart, setCart, totalPriceCart}) => {

    const deleteCart = (e) => {
        let idProductCartDelete = e.target.dataset.idProduct
        let objCart = cart.filter(e => e.product.id !== idProductCartDelete)
        setCart(objCart)
    }

    return (
        <>
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Chuyển đổi menu</span>
                            <i className="icon-bars"/>
                        </button>
                        <NavLink to="/index.html" className="logo">
                            <img src="/assets/images/logo.png" alt="Molla Logo" width={105} height={25}/>
                        </NavLink>
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <NavLink to="/index.html">Trang chủ</NavLink>
                                </li>
                                <li className="megamenu-container">
                                    <NavLink to="/product">Cửa hàng</NavLink>
                                </li>
                                {/*{*/}
                                {/*    listCategories !== null && listCategories !== undefined*/}
                                {/*        ? listCategories.map((category, index) => (*/}
                                {/*            index < 4 ?*/}
                                {/*                <li key={index}>*/}
                                {/*                    <NavLink to={`/category/${category.idPath}/${category.path}`}>*/}
                                {/*                        {category.name}*/}
                                {/*                    </NavLink>*/}
                                {/*                </li> : ""*/}
                                {/*        ))*/}
                                {/*        : ""*/}
                                {/*}*/}
                                {/*<li>*/}
                                {/*    <NavLink to="/product" className="sf-with-ul">Xem thêm</NavLink>*/}
                                {/*    <ul>*/}
                                {/*        {*/}
                                {/*            listCategories !== null && listCategories !== undefined*/}
                                {/*                ? listCategories.map((category, index) => (*/}
                                {/*                    index < 4 || index > 10 ? "" :*/}
                                {/*                        <li key={index}>*/}
                                {/*                            <NavLink to={`/category/${category.idPath}/${category.path}`}>*/}
                                {/*                                {category.name}*/}
                                {/*                            </NavLink>*/}
                                {/*                        </li>*/}
                                {/*                ))*/}
                                {/*                : ""*/}
                                {/*        }*/}
                                {/*        <li>*/}
                                {/*            <NavLink to={`/product`}>*/}
                                {/*                Xem tất cả...*/}
                                {/*            </NavLink>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</li>*/}
                            </ul>
                            {/* End .menu */}
                        </nav>
                        {/* End .main-nav */}
                    </div>
                    {/* End .header-left */}
                    <div className="header-right">
                        <div className="header-search">
                            <NavLink to="#" className="search-toggle" role="button" title="Search">
                                <i className="icon-search"/>
                            </NavLink>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label htmlFor="q" className="sr-only">Tìm kiếm</label>
                                    <input type="search" className="form-control" name="q" id="q"
                                           placeholder="Nhập từ khoá tìm kiếm sản phẩm..." required/>
                                </div>
                                {/* End .header-search-wrapper */}
                            </form>
                        </div>
                        {/* End .header-search */}
                        <div className="dropdown cart-dropdown">
                            <NavLink to="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                     aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"/>
                                <span className="cart-count">
                                    {cart !== null && cart !== undefined && cart.length > 0 ? cart.length : 0}
                                </span>
                            </NavLink>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    {
                                        cart !== null && cart !== undefined && cart.length >= 0 ?
                                            (
                                                cart.map((e, countCart) =>
                                                    countCart <= 5 ?
                                                        (
                                                            <div className="product" key={countCart}>
                                                                <div className="product-cart-details">
                                                                    <h4 className="product-title">
                                                                        <NavLink
                                                                            to={`/product/${e.product.idPath}/${e.product.path}`}>
                                                                            {e.product.name}
                                                                        </NavLink>
                                                                    </h4>
                                                                    <span className="cart-product-info">
                                                                        <span className="cart-product-qty">
                                                                            {e.quantity}
                                                                        </span>
                                                                        x {e.product.price}
                                                                    </span>
                                                                </div>
                                                                {/* End .product-cart-details */}
                                                                <figure className="product-image-container">
                                                                    <NavLink
                                                                        to={`/product/${e.product.idPath}/${e.product.path}`}
                                                                        className="product-image">
                                                                        <img src={e.product.image}
                                                                             alt={e.product.name}/>
                                                                    </NavLink>
                                                                </figure>
                                                                <button className="btn-remove"
                                                                        onClick={deleteCart}
                                                                        title="Remove Product">
                                                                    <i className="icon-close"
                                                                       data-id-product={e.product.id}/>
                                                                </button>
                                                            </div>
                                                        )
                                                        : ""
                                                )
                                            ) : ""
                                    }
                                    {/* End .product */}
                                </div>
                                {/* End .cart-product */}
                                <div className="dropdown-cart-total">
                                    <span>Tổng tiền</span>
                                    <span className="cart-total-price">
                                        {totalPriceCart}
                                    </span>
                                </div>
                                {/* End .dropdown-cart-total */}
                                <div className="dropdown-cart-action">
                                    <NavLink to="/cart.html" className="btn btn-primary">Giỏ hàng</NavLink>
                                    <NavLink to="/checkout.html" className="btn btn-outline-primary-2">
                                        <span>Thanh toán</span>
                                        <i className="icon-long-arrow-right"/>
                                    </NavLink>
                                </div>
                                {/* End .dropdown-cart-total */}
                            </div>
                            {/* End .dropdown-menu */}
                        </div>
                        {/* End .cart-dropdown */}
                    </div>
                    {/* End .header-right */}
                </div>
                {/* End .container */}
            </div>
        </>
    );
};

export default NavBarHeader;
