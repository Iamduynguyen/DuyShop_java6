import React from 'react'

const Webfooter = () => {
    return (
        <div>
            <footer className="footer">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Footer About */}
                                <div className="single-widget footer-about widget">
                                    <div className="logo">
                                        <div className="img-logo">
                                            <a className="logo" href="index.html">
                                                <img className="img-responsive" width='150' alt="logo" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="footer-widget-about-description">
                                        <p>Beatae vitae dicta su explicabo nemo enim ipsam voluptatem quia voluptas sitBeatae vitae sitBeatae vitae dicta suntania..</p>
                                    </div>
                                    <div className="social">
                                        {/* Social Icons */}
                                        <ul className="social-icons">
                                            <li><a className="facebook" href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="twitter" href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                            <li><a className="linkedin" href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                            <li><a className="pinterest" href="#" target="_blank"><i className="fa fa-pinterest-p" /></a></li>
                                            <li><a className="instagram" href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="button"><a href="#" className="bizwheel-btn">About Us</a></div>
                                </div>
                                {/*/ End Footer About */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* Footer Links */}
                                <div className="single-widget f-link widget">
                                    <h3 className="widget-title">Company</h3>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Pricing Plan</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                                {/*/ End Footer Links */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* Footer News */}
                                <div className="single-widget footer-news widget">
                                    <h3 className="widget-title">Blog Page</h3>
                                    {/* Single News */}
                                    <div className="single-f-news">
                                        <div className="post-thumb"><a href="#"><img src="https://www.inhuydat.com/uploads/hinhthe/IMG_2457_copy.jpg" alt="#" /></a></div>
                                        <div className="content">
                                            <p className="post-meta"><time className="post-date"><i className="fa fa-clock-o" />April 15, 2020</time></p>
                                            <h4 className="title"><a href="blog-sngle.html">We Provide you Best &amp; Creative Consulting Service</a></h4>
                                        </div>
                                    </div>
                                    {/*/ End Single News */}
                                    {/* Single News */}
                                    <div className="single-f-news">
                                        <div className="post-thumb"><a href="#">
                                            <img src="https://toplist.vn/images/800px/tiem-anh-mau-sieu-toc-phuong-321041.jpg" alt="#" />
                                            </a></div>
                                        <div className="content">
                                            <p className="post-meta"><time className="post-date"><i className="fa fa-clock-o" />April 10, 2020</time></p>
                                            <h4 className="title"><a href="blog-sngle.html">We Provide you Best &amp; Creative Consulting Service</a></h4>
                                        </div>
                                    </div>
                                    {/*/ End Single News */}
                                </div>
                                {/*/ End Footer News */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Footer Contact */}
                                <div className="single-widget footer_contact widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <p>Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem</p>
                                    <ul className="address-widget-list">
                                        <li className="footer-mobile-number"><i className="fa fa-phone" />+(600) 125-4985-214</li>
                                        <li className="footer-mobile-number"><i className="fa fa-envelope" />info@yoursite.com</li>
                                        <li className="footer-mobile-number"><i className="fa fa-map-marker" />House Building Uttara</li>
                                    </ul>
                                </div>
                                {/*/ End Footer Contact */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                                {/* Footer Newsletter */}
                                <div className="footer-newsletter">
                                    <form action="#" method="post" className="newsletter-area">
                                        <input type="email" placeholder="Your email address" />
                                        <button type="submit">Sign Up</button>
                                    </form>
                                </div>
                                {/*/ End Footer Newsletter */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright-content">
                                    {/* Copyright Text */}
                                    <p>© Copyright <a href="#">Bizwheel</a>. Design &amp; Development By <a target="_blank" href="#">ThemeLamp</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Webfooter
