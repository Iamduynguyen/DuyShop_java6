import React from 'react';
import {NavLink} from "react-router-dom";

const MidleFooter = () => {
    return (
        <>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="widget widget-about">
                                <img src="assets/images/demos/demo-2/logo.png" className="footer-logo" alt="Footer Logo"
                                     width={105} height={25}/>
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate
                                    magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
                                    porttitor, facilisis luctus, metus. </p>
                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">Got Question? Call us 24/7</span>
                                            <NavLink to="tel:123456789">+0123 456 789</NavLink>
                                        </div>
                                        {/* End .col-sm-6 */}
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">Payment Method</span>
                                            <figure className="footer-payments">
                                                <img src="assets/images/payments.png" alt="Payment methods" width={272}
                                                     height={20}/>
                                            </figure>
                                            {/* End .footer-payments */}
                                        </div>
                                        {/* End .col-sm-6 */}
                                    </div>
                                    {/* End .row */}
                                </div>
                                {/* End .widget-about-info */}
                            </div>
                            {/* End .widget about-widget */}
                        </div>
                        {/* End .col-sm-12 col-lg-3 */}
                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Information</h4>{/* End .widget-title */}
                                <ul className="widget-list">
                                    <li><NavLink to="about.html">About Molla</NavLink></li>
                                    <li><NavLink to="#">How to shop on Molla</NavLink></li>
                                    <li><NavLink to="#">FAQ</NavLink></li>
                                    <li><NavLink to="contact.html">Contact us</NavLink></li>
                                    <li><NavLink to="login.html">Log in</NavLink></li>
                                </ul>
                                {/* End .widget-list */}
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-sm-4 col-lg-3 */}
                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>{/* End .widget-title */}
                                <ul className="widget-list">
                                    <li><NavLink to="#">Payment Methods</NavLink></li>
                                    <li><NavLink to="#">Money-back guarantee!</NavLink></li>
                                    <li><NavLink to="#">Returns</NavLink></li>
                                    <li><NavLink to="#">Shipping</NavLink></li>
                                    <li><NavLink to="#">Terms and conditions</NavLink></li>
                                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                                </ul>
                                {/* End .widget-list */}
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-sm-4 col-lg-3 */}
                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>{/* End .widget-title */}
                                <ul className="widget-list">
                                    <li><NavLink to="#">Sign In</NavLink></li>
                                    <li><NavLink to="cart.html">View Cart</NavLink></li>
                                    <li><NavLink to="#">My Wishlist</NavLink></li>
                                    <li><NavLink to="#">Track My Order</NavLink></li>
                                    <li><NavLink to="#">Help</NavLink></li>
                                </ul>
                                {/* End .widget-list */}
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-sm-64 col-lg-3 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </div>
            {/* End .footer-middle */}
        </>
    );
};

export default MidleFooter;
