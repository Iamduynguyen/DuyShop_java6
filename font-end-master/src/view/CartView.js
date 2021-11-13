import React from 'react';
import {Link} from "react-router-dom";

const CartView = (props) => {

    return (
        <>
            <div className="page-header text-center"
                 style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
                <div className="container">
                    <h1 className="page-title">
                        Shopping Cart<span>Shop</span>
                    </h1>
                </div>
                {/* End .container */}
            </div>
            {/* End .page-header */}
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/index.html">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/product">Shop</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Shopping Cart
                        </li>
                    </ol>
                </div>
                {/* End .container */}
            </nav>
            {/* End .breadcrumb-nav */}
            <div className="page-content">
                <div className="cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <table className="table table-cart table-mobile">
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        props.cart !== null && props.cart !== undefined && props.cart.length > 0 ?
                                            props.cart.map((e, index) => (
                                                <tr key={index}>
                                                    <td className="product-col">
                                                        <div className="product">
                                                            <figure className="product-media">
                                                                <Link to={`/product/${e.idPath}/${e.path}`}>
                                                                    <img src={e.product.image}
                                                                         alt="Product image"/>
                                                                </Link>
                                                            </figure>
                                                            <h3 className="product-title">
                                                                <Link to={`/product/${e.idPath}/${e.path}`}>
                                                                    {e.product.name}
                                                                </Link>
                                                            </h3>{/* End .product-title */}
                                                        </div>
                                                        {/* End .product */}
                                                    </td>
                                                    <td className="price-col">{e.product.price}</td>
                                                    <td className="quantity-col">
                                                        <div className="cart-product-quantity"
                                                             onClick={() => props.fnChangeQuantity(e)}>
                                                            <input type="number" className="form-control"
                                                                   defaultValue={e.quantity} min={1}
                                                                   id={e.product.id}
                                                                   max={10} step={1} data-decimals={0} required/>
                                                        </div>
                                                        {/* End .cart-product-quantity */}
                                                    </td>
                                                    <td className="total-col">{e.product.price * e.quantity}</td>
                                                    <td className="remove-col">
                                                        <button className="btn-remove"
                                                                onClick={() => props.fnRemoveProductInCart(e)}>
                                                            <i className="icon-close"/>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                            : ""
                                    }
                                    </tbody>
                                </table>
                                {/* End .table table-wishlist */}
                                <div className="cart-bottom">
                                    <div className="cart-discount">
                                        <form>
                                            <div className="input-group">
                                                <input type="text" className="form-control" required
                                                       placeholder="coupon code" id="add-code-voucher-cart"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" onClick={props.fnUseCodeVouher}
                                                            type="button">
                                                        Áp dụng
                                                        <i className="icon-long-arrow-right"/>
                                                    </button>
                                                </div>
                                                {/* .End .input-group-append */}
                                            </div>
                                            {/* End .input-group */}
                                        </form>
                                    </div>
                                    {/* End .cart-discount */}
                                    {/*<Link to="#" className="btn btn-outline-dark-2">*/}
                                    {/*    <span>UPDATE CART</span>*/}
                                    {/*    <i className="icon-refresh"/>*/}
                                    {/*</Link>*/}
                                </div>
                                {/* End .cart-bottom */}
                            </div>
                            {/* End .col-lg-9 */}
                            <aside className="col-lg-3">
                                <div className="summary summary-cart">
                                    <h3 className="summary-title">Tổng hoá đơn</h3>{/* End .summary-title */}
                                    <table className="table table-summary">
                                        <tbody>
                                        <tr className="summary-subtotal">
                                            <td>Tổng tiền:</td>
                                            <td>{props.totalPriceCart + props.codeVoucher.priceSale}</td>
                                        </tr>
                                        {/* End .summary-subtotal */}
                                        <tr className="summary-shipping">
                                            <td>Giao hàng:</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr className="summary-shipping-row">
                                            <td>
                                                <label>
                                                    Phí vận chuyển
                                                </label>
                                            </td>
                                            <td>0.00</td>
                                        </tr>
                                        <tr className="summary-shipping">
                                            <td>Mã giảm giá:</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr className="summary-shipping-row">
                                            <td>
                                                <label>
                                                    {props.codeVoucher !== null && props.codeVoucher !== undefined ? props.codeVoucher.code : "Không có"}
                                                </label>
                                            </td>
                                            <td>{props.codeVoucher !== null && props.codeVoucher !== undefined ? props.codeVoucher.priceSale : 0}</td>
                                        </tr>
                                        {/* End .summary-shipping-row */}
                                        <tr className="summary-total">
                                            <td>Thành tiền:</td>
                                            <td>{props.totalPriceCart}</td>
                                        </tr>
                                        {/* End .summary-total */}
                                        </tbody>
                                    </table>
                                    {/* End .table table-summary */}
                                    <Link to="/checkout.html" onClick={props.fnRedirectLoginPage}
                                          className="btn btn-primary btn-order btn-block">
                                        Thanh toán
                                    </Link>
                                </div>
                                {/* End .summary */}
                                <Link to="/product" className="btn btn-outline-dark-2 btn-block mb-3">
                                    <span>CONTINUE SHOPPING</span>
                                    <i className="icon-refresh"/>
                                </Link>
                            </aside>
                            {/* End .col-lg-3 */}
                        </div>
                        {/* End .row */}
                    </div>
                    {/* End .container */}
                </div>
                {/* End .cart */}
            </div>
            {/* End .page-content */}
        </>
    );
};

export default CartView;
