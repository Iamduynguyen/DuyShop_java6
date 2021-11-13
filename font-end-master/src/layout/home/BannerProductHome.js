import React from 'react';

const BannerProductHome = () => {
    return (
        <div className="intro-section bg-lighter pt-5 pb-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0">
                            <div data-toggle="owl"
                                 className="intro-slider intro-slider-1 owl-carousel owl-simple owl-light owl-nav-inside"
                                 data-owl-options="{&quot;nav&quot;: false,&quot;responsive&quot;: {&quot;768&quot;: {&quot;nav&quot;: true}}}">
                                <div className="intro-slide">
                                    <figure className="slide-image">
                                        <picture>
                                            <source media="(max-width: 480px)"
                                                    srcSet="assets/images/slider/slide-1-480w.jpg"/>
                                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                            <img src="assets/images/slider/slide-1.jpg" alt="Image Desc"/>
                                        </picture>
                                    </figure>
                                    {/* End .slide-image */}
                                    <div className="intro-content">
                                        <h3 className="intro-subtitle">
                                            Topsale Collection</h3>{/* End .h3 intro-subtitle */}
                                        <h1 className="intro-title">Living Room<br/>Furniture
                                        </h1>{/* End .intro-title */}
                                        <a href="category.html" className="btn btn-outline-white">
                                            <span>SHOP NOW</span>
                                            <i className="icon-long-arrow-right"/>
                                        </a>
                                    </div>
                                    {/* End .intro-content */}
                                </div>
                                {/* End .intro-slide */}
                            </div>
                            {/* End .intro-slider owl-carousel owl-simple */}
                            <span className="slider-loader"/>{/* End .slider-loader */}
                        </div>
                        {/* End .intro-slider-container */}
                    </div>
                    {/* End .col-lg-8 */}
                    <div className="col-lg-4">
                        <div className="intro-banners">
                            <div className="row row-sm">
                                <div className="col-md-6 col-lg-12">
                                    <div className="banner banner-display">
                                        <a href="#">
                                            <img src="assets/images/banners/home/intro/banner-1.jpg" alt="Banner"/>
                                        </a>
                                        <div className="banner-content">
                                            <h4 className="banner-subtitle text-darkwhite"><a href="#">Clearence</a>
                                            </h4>{/* End .banner-subtitle */}
                                            <h3 className="banner-title text-white"><a
                                                href="#">Chairs &amp; Chaises <br/>Up to 40% off</a>
                                            </h3>{/* End .banner-title */}
                                            <a href="#" className="btn btn-outline-white banner-link">Shop Now<i
                                                className="icon-long-arrow-right"/></a>
                                        </div>
                                        {/* End .banner-content */}
                                    </div>
                                    {/* End .banner */}
                                </div>
                                {/* End .col-md-6 col-lg-12 */}
                                <div className="col-md-6 col-lg-12">
                                    <div className="banner banner-display mb-0">
                                        <a href="#">
                                            <img src="assets/images/banners/home/intro/banner-2.jpg" alt="Banner"/>
                                        </a>
                                        <div className="banner-content">
                                            <h4 className="banner-subtitle text-darkwhite"><a href="#">New in</a>
                                            </h4>{/* End .banner-subtitle */}
                                            <h3 className="banner-title text-white"><a href="#">Best Lighting <br/>Collection</a>
                                            </h3>{/* End .banner-title */}
                                            <a href="#" className="btn btn-outline-white banner-link">Discover Now<i
                                                className="icon-long-arrow-right"/></a>
                                        </div>
                                        {/* End .banner-content */}
                                    </div>
                                    {/* End .banner */}
                                </div>
                                {/* End .col-md-6 col-lg-12 */}
                            </div>
                            {/* End .row row-sm */}
                        </div>
                        {/* End .intro-banners */}
                    </div>
                    {/* End .col-lg-4 */}
                </div>
                {/* End .row */}
                <div className="mb-6"/>
                {/* End .mb-6 */}
                <div className="owl-carousel owl-simple" data-toggle="owl" data-owl-options="{
                          &quot;nav&quot;: false,
                          &quot;dots&quot;: false,
                          &quot;margin&quot;: 30,
                          &quot;loop&quot;: false,
                          &quot;responsive&quot;: {
                              &quot;0&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;420&quot;: {
                                  &quot;items&quot;:3
                              },
                              &quot;600&quot;: {
                                  &quot;items&quot;:4
                              },
                              &quot;900&quot;: {
                                  &quot;items&quot;:5
                              },
                              &quot;1024&quot;: {
                                  &quot;items&quot;:6
                              }
                          }
                      }">
                    <a href="#" className="brand">
                        <img src="assets/images/brands/1.png" alt="Brand Name"/>
                    </a>
                </div>
                {/* End .owl-carousel */}
            </div>
            {/* End .container */}
        </div>
    );
};

export default BannerProductHome;
