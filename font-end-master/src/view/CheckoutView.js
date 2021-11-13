import React from 'react';
import {Link} from "react-router-dom";

const CheckoutView = (props) => {
    return (
        <>
            <div className="page-header text-center"
                 style={{backgroundImage: 'url("/assets/images/page-header-bg.jpg")'}}>
                <div className="container">
                    <h1 className="page-title">Thông tin thanh toán</h1>
                </div>
                {/* End .container */}
            </div>
            {/* End .page-header */}
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Shop</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Thông tin thanh toán</li>
                    </ol>
                </div>
                {/* End .container */}
            </nav>
            {/* End .breadcrumb-nav */}
            <div className="page-content">
                <div className="checkout">
                    <div className="container">
                        {
                            props.codeVoucher !== null && props.codeVoucher !== undefined ?
                                null : (
                                    <div className="checkout-discount">
                                        <form action="#">
                                            <input id="code-checkout checkout-discount-input" type="text"
                                                   className="form-control" required
                                                   placeholder="Bạn có mã giảm giá? Nhập mã giảm giá của bạn"/>
                                        </form>
                                    </div>
                                )
                        }
                        {/* End .checkout-discount */}
                        <form id="id-form-checkout">
                            <div className="row">
                                <div className="col-lg-9">
                                    <label>Sử dụng thông tin tài khoản đăng nhập</label>
                                    <input onClick={props.fnClickGetInfoCheckout} name="village" type="checkbox" className="form-control"
                                           placeholder="Xuân Dương" />
                                    <h2 className="checkout-title">Chi tiết người nhận</h2>{/* End .checkout-title */}
                                    <label>Họ và tên *</label>
                                    <input type="text" className="form-control" required
                                           name="fullName" placeholder="Nguyễn Văn A"
                                           defaultValue={props.infoCheckout.fullName}/>
                                    <label>Số nhà, thôn / xóm *</label>
                                    <input name="village" type="text" className="form-control"
                                           placeholder="Xuân Dương"/>
                                    <label>Phường / xã *</label>
                                    <input name="ward" type="text" className="form-control" required
                                           placeholder="Kim Lũ"/>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Quận / Huyện *</label>
                                            <input name="district" type="text" className="form-control" required
                                                   placeholder="Sóc Sơn"/>
                                        </div>
                                        {/* End .col-sm-6 */}
                                        <div className="col-sm-6">
                                            <label>Tỉnh / Thành phố *</label>
                                            <input name="city" type="text" className="form-control" required
                                                   placeholder="Hà Nội"/>
                                        </div>
                                        {/* End .col-sm-6 */}
                                    </div>
                                    {/* End .row */}
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Địa chỉ email *</label>
                                            <input name="email" type="text" className="form-control" required
                                                   placeholder="email@polymart.xyz"
                                                   defaultValue={props.infoCheckout.email}/>
                                        </div>
                                        {/* End .col-sm-6 */}
                                        <div className="col-sm-6">
                                            <label>Số điện thoại *</label>
                                            <input name="phoneNumber" type="tel" className="form-control"
                                                   required placeholder="0344623xxxx"
                                                   defaultValue={props.infoCheckout.phoneNumber}/>
                                        </div>
                                        {/* End .col-sm-6 */}
                                    </div>
                                    {/* End .row */}
                                    <label>Ghi chú (không bắt buộc)</label>
                                    <textarea name="note" className="form-control" cols={30} rows={4}
                                              placeholder="Viết ghi chú hoặc mong muốn của bạn."
                                              defaultValue={""}/>
                                </div>
                                {/* End .col-lg-9 */}
                                <aside className="col-lg-3">
                                    <div className="summary">
                                        <h3 className="summary-title">Hoá đơn của bạn</h3>{/* End .summary-title */}
                                        <table className="table table-summary">
                                            <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                props.cart !== null && props.cart !== undefined && props.cart.length > 0 ?
                                                    props.cart.map((e, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <Link
                                                                    to={`/product/${e.product.idPath}/${e.product.path}`}>
                                                                    {e.product.name}
                                                                </Link>
                                                                <b className="text-danger"> x{e.quantity}</b>
                                                            </td>
                                                            <td>{e.product.price * e.quantity}</td>
                                                        </tr>
                                                    )) : ""
                                            }
                                            <tr className="summary-subtotal">
                                                <td>Mã giảm giá:</td>
                                                <td>
                                                    {props.codeVoucher !== null && props.codeVoucher !== undefined ? props.codeVoucher.code : "Không có"}
                                                </td>
                                            </tr>
                                            {/* End .summary-subtotal */}
                                            <tr>
                                                <td>Số tiền giảm:</td>
                                                <td>
                                                    {props.codeVoucher !== null && props.codeVoucher !== undefined ? props.codeVoucher.priceSale : 0}
                                                </td>
                                            </tr>
                                            <tr className="summary-total">
                                                <td>Tổng tiền:</td>
                                                <td>{props.totalPriceCart}</td>
                                            </tr>
                                            {/* End .summary-total */}
                                            </tbody>
                                        </table>
                                        {/* End .table table-summary */}
                                        <div className="accordion-summary" id="accordion-payment">
                                            <div className="card">
                                                <div className="card-header" id="heading-1">
                                                    <h2 className="card-title">
                                                        <a role="button" data-toggle="collapse" href="#cash"
                                                              aria-expanded="true" aria-controls="cash">
                                                            Thanh toán tiền mặt
                                                        </a>
                                                    </h2>
                                                </div>
                                                {/* End .card-header */}
                                                <div id="cash" className="collapse show"
                                                     aria-labelledby="heading-1" data-parent="#accordion-payment">
                                                    <div className="card-body">
                                                        Áp dụng cho khách hàng đến mua hàng trực tiếp tại cửa hàng.
                                                    </div>
                                                    {/* End .card-body */}
                                                </div>
                                                {/* End .collapse */}
                                            </div>
                                            {/* End .card */}
                                            <div className="card">
                                                <div className="card-header" id="heading-2">
                                                    <h2 className="card-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse"
                                                              href="#card" aria-expanded="false"
                                                              aria-controls="card">
                                                            Thanh toán bằng thẻ
                                                        </a>
                                                    </h2>
                                                </div>
                                                {/* End .card-header */}
                                                <div id="card" className="collapse"
                                                     aria-labelledby="heading-2"
                                                     data-parent="#accordion-payment">
                                                    <div className="card-body">
                                                        Áp dụng cho khách hàng đặt hàng trực tuyến hoặc mua hàng trực
                                                        tiếp tại cửa hàng.
                                                    </div>
                                                    {/* End .card-body */}
                                                </div>
                                                {/* End .collapse */}
                                            </div>
                                            {/* End .card */}
                                            <div className="card">
                                                <div className="card-header" id="heading-3">
                                                    <h2 className="card-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse"
                                                              href="#online" aria-expanded="false"
                                                              aria-controls="online">
                                                            Thanh toán trực tuyến
                                                        </a>
                                                    </h2>
                                                </div>
                                                {/* End .card-header */}
                                                <div id="online" className="collapse"
                                                     aria-labelledby="heading-3"
                                                     data-parent="#accordion-payment">
                                                    <div className="card-body">
                                                        Áp dụng cho khách hàng đặt hàng trực tuyến trên hệ thống website
                                                        của cửa hàng.
                                                    </div>
                                                    {/* End .card-body */}
                                                </div>
                                                {/* End .collapse */}
                                            </div>
                                            {/* End .card */}
                                        </div>
                                        {/* End .accordion */}
                                        <button type="button" onClick={props.fnSaveCheckout}
                                                className="btn btn-success btn-order btn-block">
                                            Hoàn tất
                                        </button>
                                    </div>
                                    {/* End .summary */}
                                </aside>
                                {/* End .col-lg-3 */}
                            </div>
                            {/* End .row */}
                        </form>
                    </div>
                    {/* End .container */}
                </div>
                {/* End .checkout */}
            </div>
            {/* End .page-content */}
        </>
    );
};

export default CheckoutView;
