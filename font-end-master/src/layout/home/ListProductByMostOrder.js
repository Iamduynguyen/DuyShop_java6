import React from 'react';
import {Link} from "react-router-dom";
import CardProductHome from "./CardProductHome";

const ListProductByMostOrder = (props) => {
    return (
        <div>
            <div className="mb-6"/>
            {/* End .mb-6 */}
            <div className="container">
                <div className="heading heading-center mb-5">
                    <h2 className="title-lg">Mua nhiều nhất</h2>{/* End .title */}
                </div>
                {/* End .heading */}
                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="trendy-all-tab" role="tabpanel"
                         aria-labelledby="trendy-all-link">
                        <div className="products">
                            <div className="row justify-content-center">
                                {
                                    props.listProductOrderByMost !== null && props.listProductOrderByMost !== undefined ?
                                        props.listProductOrderByMost.map((product, index) => (
                                            <CardProductHome key={index}
                                                             product={product}
                                                             fnAddCart={props.fnAddCart}
                                                             fnWishlist={props.fnWishlist}
                                            />
                                        )) : null
                                }
                                {/* End .product */}
                                {/* End .owl-carousel */}
                            </div>
                        </div>
                    </div>
                    {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
            </div>
            {/* End .container */}
        </div>
    );
};

export default ListProductByMostOrder;
