import React from 'react';
import {Link} from "react-router-dom";

const CardProductHome = ({product, fnAddCart, fnWishlist}) => {

    const addCart = (product) => {
        console.log(product)
        fnAddCart(1, product)
    }

    return (
        <>
            {
                product !== null && product !== undefined ?
                    (
                        <>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="product product-11 mt-v3 text-center">
                                    <figure className="product-media">
                                        <Link to={`/product/${product.idPath}/${product.path}`}>
                                            {
                                                product.images !== null && product.images !== undefined ?
                                                    product.images.map((img, index) => (
                                                        index === 0 ?
                                                            <img key={index} src={img.path} alt={product.name}/>
                                                            : index === 1 ?
                                                                <img key={index} src={img.path} alt={product.name}
                                                                     className="product-image-hover"/>
                                                                : null
                                                    ))
                                                    : null
                                            }
                                        </Link>
                                        <div className="product-action-vertical">
                                            <button className="btn-product-icon icon-heart"
                                                    onClick={() => fnWishlist(product)}>
                                                <span>Thêm yêu thích</span>
                                            </button>
                                        </div>
                                        {/* End .product-action-vertical */}
                                    </figure>
                                    {/* End .product-media */}
                                    <div className="product-body">
                                        <h3 className="product-title">
                                            <Link to={`/product/${product.idPath}/${product.path}`}>
                                                {product.name}
                                            </Link>
                                        </h3>{/* End .product-title */}
                                        <div className="product-price">
                                            {product.price}
                                        </div>
                                        {/* End .product-price */}
                                    </div>
                                    {/* End .product-body */}
                                    <div className="product-action">
                                        <button className="btn-product btn-cart" onClick={() => addCart(product)}>
                                            <span>Thêm giỏ hàng</span>
                                        </button>
                                    </div>
                                    {/* End .product-action */}
                                </div>
                                {/* End .product */}
                            </div>
                        </>
                    ) : null
            }

        </>
    );
};

export default CardProductHome;
