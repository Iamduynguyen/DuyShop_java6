import React from 'react';
import CardProductHome from "./CardProductHome";

const ListProductHome = (props) => {
    return (
        <>
            <div className="container">
                <div className="heading heading-center mb-6">
                    <h2 className="title">Sản phẩm mới</h2>{/* End .title */}
                </div>
                {/* End .heading */}
                <div className="tab-content">
                    <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel"
                         aria-labelledby="top-all-link">
                        <div className="products">
                            <div className="row justify-content-center">
                                {
                                    props.listAllProducts !== null && props.listAllProducts !== undefined ?
                                        props.listAllProducts.map((product, index) => (
                                            <CardProductHome key={index}
                                                product={product}
                                                fnAddCart={props.fnAddCart}
                                                fnWishlist={props.fnWishlist}
                                            />
                                        )) : null
                                }
                                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .products */}
                    </div>
                    {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
                <div className="more-container text-center">
                    <button className="btn btn-outline-darker btn-more" id="load-more-product" onClick={props.fnLoadMoreProduct}>
                        <span>Tải thêm sản phẩm</span>
                        <i className="icon-long-arrow-down"/>
                    </button>
                </div>
                {/* End .more-container */}
            </div>
        </>
    );
};

export default ListProductHome;
