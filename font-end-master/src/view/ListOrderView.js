import React from 'react';
import {Link} from "react-router-dom";

const ListOrderView = (props) => {
    return (
        <>
            <div>
                <div className="page-header text-center"
                     style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
                    <div className="container">
                        <h1 className="page-title">Danh sách mua hàng<span>polymart.xyz</span></h1>
                    </div>
                    {/* End .container */}
                </div>
                {/* End .page-header */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/index.html">Trang chủ</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Danh sách mua hàng</li>
                        </ol>
                    </div>
                    {/* End .container */}
                </nav>
                {/* End .breadcrumb-nav */}
                <div className="page-content">
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Thành tiền</th>
                                <th>Ngày mua</th>
                                <th>Trạng thái</th>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>

                            {/*[*/}
                            {/*{*/}
                            {/*    "id": "aa311480-1fe5-4a5c-a24b-f900fdaa9091",*/}
                            {/*    "idOrder": "3d6affd3-cc91-4940-b74d-4a64933e2991",*/}
                            {/*    "idProduct": "e1287f4f-1dd7-48da-a42e-4bd0d534358c",*/}
                            {/*    "nameProduct": "sản phẩm mới",*/}
                            {/*    "price": 990000,*/}
                            {/*    "priceSale": 1000,*/}
                            {/*    "quantity": 1,*/}
                            {/*    "quantityReturn": 0,*/}
                            {/*    "returns": []*/}
                            {/*}*/}
                            {/*]*/}

                            {
                                props.listOrders !== null && props.listOrders !== undefined && props.listOrders.length > 0 ?
                                    (
                                        props.listOrders.map((order, index) => (
                                            <tr key={`order${index}`}>
                                                <td className="price-col">
                                                    {index + 1}
                                                </td>
                                                <td className="price-col">
                                                    {
                                                        order.details !== null && order.details !== undefined && order.details.length > 0
                                                            ? order.details.reduce((a, v) => a = a + (v.price * v.quantity) - v.priceSale, 0) - (order.priceVoucher == null ? 0 : order.priceVoucher)
                                                            : null
                                                    }
                                                </td>
                                                <td className="price-col">
                                                    {order.dateCreated}
                                                </td>
                                                <td className="stock-col">
                                                    {
                                                        order.paymentStatus ?
                                                            <span className="text-success">Đã thanh toán</span>
                                                            : <span className="text-danger">Chưa thanh toán</span>
                                                    }
                                                </td>
                                                <td className="action-col">
                                                    <div className="dropdown">
                                                        <button className="btn btn-block btn-outline-primary-2"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
                                                            <i className="icon-list-alt"/>Tuỳ chọn
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <Link className="dropdown-item" to={`/order/${order.id}`}>Xem chi tiết</Link>
                                                            {
                                                                order.transports !== null && order.transports !== undefined && order.transports.length > 0
                                                                    ? (
                                                                        <Link className="dropdown-item" to="#"
                                                                              onClick={() => props.fnTransports(order.transports)}>
                                                                            Xem vận chuyển
                                                                        </Link>
                                                                    )
                                                                    : null
                                                            }
                                                            {
                                                                !order.paymentStatus && (order.paymentMethod === 'online' || order.paymentMethod === 'VNPAY')
                                                                    ? (
                                                                        <Link className="dropdown-item" to="#"
                                                                              onClick={() => props.fnPaymentOrder(order)}>
                                                                            Thanh toán
                                                                        </Link>
                                                                    )
                                                                    : null
                                                            }
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : null
                            }
                            </tbody>
                        </table>
                        {/* End .table table-wishlist */}
                    </div>
                    {/* End .container */}
                </div>
                {/* End .page-content */}
            </div>
        </>
    );
};

export default ListOrderView;
