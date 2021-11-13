import React from 'react';
import {NavLink} from "react-router-dom";

const TopBarHeader = (props) => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <div className="header-dropdown">
                        <NavLink to="#">VI</NavLink>
                        <div className="header-menu">
                            <ul>
                                <li><a href="#">Tiếng Việt</a></li>
                                <li><a href="#">English</a></li>
                            </ul>
                        </div>
                        {/* End .header-menu */}
                    </div>
                    {/* End .header-dropdown */}
                </div>
                {/* End .header-left */}
                <div className="header-right">
                    <ul className="top-menu">
                        <li>
                            <NavLink to="#">Liên kết</NavLink>
                            <ul>
                                <li><NavLink to="tel:#"><i className="icon-phone"/>Di động: +0123 456 789</NavLink></li>
                                {
                                    props.userLogin !== null && props.userLogin !== undefined && props.userLogin.trim() !== ''
                                        ? (
                                            <>
                                                <li>
                                                    <NavLink to="/wishlist.html"><i className="icon-heart-o"/>
                                                        Sản phẩm yêu thích
                                                        <span>
                                                            ({props.listWishlist !== null && props.listWishlist !== undefined ? props.listWishlist.length : 0})
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/order.html"><i className="icon-cart-plus"/>
                                                        Hoá đơn mua hàng
                                                        <span>
                                                            ({props.listOrders !== null && props.listOrders !== undefined ? props.listOrders.length : 0})
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/profile">Thông tin cá nhân</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/logout" data-toggle="modal">
                                                        <i className="icon-user"/>
                                                        Đăng xuất
                                                    </NavLink>
                                                </li>
                                            </>
                                        )
                                        : (
                                            <>
                                                <li>
                                                    <NavLink to="/login" data-toggle="modal">
                                                        <i className="icon-user"/>
                                                        Đăng nhập
                                                    </NavLink>
                                                </li>
                                            </>
                                        )
                                }
                            </ul>
                        </li>
                    </ul>
                    {/* End .top-menu */}
                </div>
                {/* End .header-right */}
            </div>
            {/* End .container */}
        </div>
    );
};

export default TopBarHeader;
