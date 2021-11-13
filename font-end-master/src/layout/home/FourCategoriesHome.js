import React from 'react';
import {Link} from "react-router-dom";

const FourCategoriesHome = ({listCategories}) => {
    return (
        <>
            <div key={`abcae`} className="container categories pt-6">
                <h2 className="title-lg text-center mb-4">Loại sản phẩm</h2>{/* End .title-lg text-center */}
                <div className="row">
                    {
                        listCategories !== null && listCategories !== undefined ?
                            listCategories.map((category, index) => (
                                index === 0 ? (
                                    <div key={`afd${index}`} className="col-6 col-lg-4">
                                        <div className="banner banner-display banner-link-anim">
                                            <Link to={`/category/${category.idPath}/${category.path}`}>
                                                <img src={category.banner} alt="Banner"/>
                                            </Link>
                                            <div className="banner-content banner-content-center">
                                                <h3 className="banner-title text-white">
                                                    <Link to={`/category/${category.idPath}/${category.path}`}>
                                                        {category.name}
                                                    </Link>
                                                </h3>{/* End .banner-title */}
                                                <Link to={`/category/${category.idPath}/${category.path}`}
                                                      className="btn btn-outline-white banner-link">
                                                    Xem ngay
                                                    <i className="icon-long-arrow-right"/>
                                                </Link>
                                            </div>
                                            {/* End .banner-content */}
                                        </div>
                                        {/* End .banner */}
                                    </div>
                                ) : index === 1 ? (
                                    <div className="col-6 col-lg-4 order-lg-last">
                                        <div className="banner banner-display banner-link-anim">
                                            <Link to={`/category/${category.idPath}/${category.path}`}>
                                                <img src={category.banner} alt="Banner"/>
                                            </Link>
                                            <div className="banner-content banner-content-center">
                                                <h3 className="banner-title text-white">
                                                    <Link to={`/category/${category.idPath}/${category.path}`}>
                                                        {category.name}
                                                    </Link>
                                                </h3>{/* End .banner-title */}
                                                <Link to={`/category/${category.idPath}/${category.path}`}
                                                      className="btn btn-outline-white banner-link">
                                                    Xem ngay
                                                    <i className="icon-long-arrow-right"/>
                                                </Link>
                                            </div>
                                            {/* End .banner-content */}
                                        </div>
                                        {/* End .banner */}
                                    </div>
                                ) : index === 3 || index === 4 ? (
                                    <div className="col-sm-12 col-lg-4 banners-sm">
                                        <div className="row">
                                            {
                                                index === 3 ? (
                                                    <div
                                                        className="banner banner-display banner-link-anim col-lg-12 col-6">
                                                        <Link to={`/category/${category.idPath}/${category.path}`}>
                                                            <img src={category.banner} alt="Banner"/>
                                                        </Link>
                                                        <div className="banner-content banner-content-center">
                                                            <h3 className="banner-title text-white">
                                                                <Link to={`/category/${category.idPath}/${category.path}`}>
                                                                    {category.name}
                                                                </Link>
                                                            </h3>{/* End .banner-title */}
                                                            <Link to={`/category/${category.idPath}/${category.path}`}
                                                                  className="btn btn-outline-white banner-link">
                                                                Xem ngay
                                                                <i className="icon-long-arrow-right"/>
                                                            </Link>
                                                        </div>
                                                        {/* End .banner-content */}
                                                    </div>
                                                ) : index === 4 ? (
                                                    <div
                                                        className="banner banner-display banner-link-anim col-lg-12 col-6">
                                                        <Link to={`/category/${category.idPath}/${category.path}`}>
                                                            <img src={category.banner} alt="Banner"/>
                                                        </Link>
                                                        <div className="banner-content banner-content-center">
                                                            <h3 className="banner-title text-white">
                                                                <Link to={`/category/${category.idPath}/${category.path}`}>
                                                                    {category.name}
                                                                </Link>
                                                            </h3>{/* End .banner-title */}
                                                            <Link to={`/category/${category.idPath}/${category.path}`}
                                                                  className="btn btn-outline-white banner-link">
                                                                Xem ngay
                                                                <i className="icon-long-arrow-right"/>
                                                            </Link>
                                                        </div>
                                                        {/* End .banner-content */}
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                ) : null
                            )) : null
                    }
                </div>
                {/* End .row */}
            </div>
        </>
    );
};

export default FourCategoriesHome;
