import React from 'react'
import { Link } from 'react-router-dom'

const WebsiteHeader = () => {
    return (
        <div>
          <header className="header">
          {/* Topbar */}
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  {/* Top Contact */}
                  <div className="top-contact">
                    <div className="single-contact"><i className="fa fa-phone" />Phone: 0961535596</div> 
                    <div className="single-contact"><i className="fa fa-envelope-open" />Email: nguyenducduynahoan@gmail.com</div>	
                    <div className="single-contact"><i className="fa fa-clock-o" />Opening: 08AM - 09PM</div> 
                  </div>
                  {/* End Top Contact */}
                </div>	
                <div className="col-lg-4 col-12">
                  <div className="topbar-right">
                    {/* Social Icons */}
                    <ul className="social-icons">
                      <li><a href="https://www.facebook.com/nguyenducduynahoan/"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                    </ul>															
                    <div className="button">
                      <a href="http://localhost:3000/admin/fashion" className="bizwheel-btn">Admin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Topbar */}
          {/* Middle Header */}
          <div className="middle-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="middle-inner">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 col-12">
                        {/* Logo */}
                        <div className="logo">
                          {/* Image Logo */}
                          <div className="img-logo">
                            <a href="http://localhost:3000/index">
                              <img width='160' alt="#" />
                            </a>
                          </div>
                        </div>								
                        <div className="mobile-nav" />
                      </div>
                      <div className="col-lg-10 col-md-9 col-12">
                        <div className="menu-area">
                          {/* Main Menu */}
                          <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">	
                              <div className="nav-inner">	
                                <div className="menu-home-menu-container">
                                  {/* Naviagiton */}
                                  <ul id="nav" className="nav main-menu menu navbar-nav">
                                    <li><Link to="index">Trang chủ</Link></li>
                                    <li className="icon-active"><Link >Sản phẩm</Link>
                                      <ul className="sub-menu">
                                        <li><Link to="service">Đồng hồ thời trang</Link></li>
                                        <li><Link to="#">Đồng hồ cao cấp</Link></li>
                                        <li><Link to="#">Đồng hồ thể thao</Link></li>
                                      </ul>
                                    </li>
                                    <li><Link to="blog">Diễn đàn</Link></li>
                                    <li className="icon-active"><Link to="support">Hỗ trợ</Link>
                                      <ul className="sub-menu">
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="404.html">404</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="contact.html">Liên hệ</a></li>
                                  </ul>
                                  {/*/ End Naviagiton */}
                                </div>
                              </div>
                            </div>
                          </nav>
                          {/*/ End Main Menu */}	
                          {/* Right Bar */}
                          <div className="right-bar">
                            {/* Search Bar */}
                            <ul className="right-nav">
                              <li className="top-search"><a href="#0"><i className="fa fa-search" /></a></li>
                              <li className="bar"><a className="fa fa-bars" /></li>
                            </ul>
                            {/*/ End Search Bar */}
                            {/* Search Form */}
                            <div className="search-top">
                              <form action="#" className="search-form" method="get">
                                <input type="text" name="s" defaultValue placeholder="Search here" />
                                <button type="submit" id="searchsubmit"><i className="fa fa-search" /></button>
                              </form>
                            </div>
                            {/*/ End Search Form */}
                          </div>	
                          {/*/ End Right Bar */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Middle Header */}
          {/* Sidebar Popup */}
          <div className="sidebar-popup">
            <div className="cross">
              <a className="btn"><i className="fa fa-close" /></a>
            </div>
            <div className="single-content">
              <h4>About Bizwheel</h4>
              <p>The main component of a healthy environment for self esteem is that it needs be nurturing. It should provide unconditional warmth.</p>
              {/* Social Icons */}
              <ul className="social">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
            <div className="single-content">
              <h4>Important Links</h4>   
              <ul className="links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Pricing Plan</a></li>
                <li><a href="#">Blog &amp; News</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>	
          </div>
          {/*/ Sidebar Popup */}	
        </header>
        </div>
    )
}

export default WebsiteHeader
