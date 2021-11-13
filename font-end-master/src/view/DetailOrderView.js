import React from 'react';
import moment from 'moment'
import {Link} from "react-router-dom";

const DetailOrderView = ({order}) => {

    console.log(order)
    console.log(moment(order.dateCreated).format("DD MM YYYY"))

    return (
        <>
            <div className="container">
                <h3 className="card-title">Chi tiết hoá đơn mua hàng</h3>
                <div className="card-body row">
                    <div className="col-4">
                        <label className="float-right">Khách hàng:</label>
                    </div>
                    <div className="col-8">
                        <label>{order.nameUser}</label>
                    </div>
                    <div className="col-4">
                        <label className="float-right">Người nhận hàng:</label>
                    </div>
                    <div className="col-8">
                        <label>{order.fullName}</label>
                    </div>
                    <div className="col-4">
                        <label className="float-right">Số điện thoại:</label>
                    </div>
                    <div className="col-8">
                        <label>{order.phoneNumber}</label>
                    </div>
                    <div className="col-4">
                        <label className="float-right">Ngày mua:</label>
                    </div>
                    <div className="col-8">
                        <label>{moment(order.dateCreated).format("DD-MM-YYYY")}</label>
                    </div>
                    <div className="col-4">
                        <label className="float-right">Tổng tiền:</label>
                    </div>
                    <div className="col-8">
                        <label>
                            {
                                order.details !== null && order.details !== undefined && order.details.length > 0
                                    ? order.details.reduce((a, v) => a = a + (v.price * v.quantity) - v.priceSale, 0)
                                    : 0
                            }
                        </label>
                    </div>
                    <div className="col-4">
                        <label className="float-right">Mã giảm giá:</label>
                    </div>
                    <div className="col-8">
                        <label>{order.codeVoucher}</label>
                    </div>
                    <div className="col-4">
                        <label className="float-right">Thành tiền:</label>
                    </div>
                    <div className="col-8">
                        <label>{order.totalPrice}</label>
                    </div>
                    <table className="table table-wishlist table-mobile">
                        <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Giá giảm</th>
                            <th>Số lượng</th>
                            <th>Trả hàng</th>
                            <th>Tổng tiền</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            order.details !== null && order.details !== undefined && order.details.length > 0
                                ? order.details.map((detail, index) => (
                                    (
                                        <tr key={`detail-order-${index}`}>
                                            <td className="product-col">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <Link to={`/product/${detail.idPathProduct}/${detail.pathProduct}`}>
                                                            <img src={detail.imageProduct} alt="Product image"/>
                                                        </Link>
                                                    </figure>
                                                    <h3 className="product-title">
                                                        <Link to={`/product/${detail.idPathProduct}/${detail.pathProduct}`}>
                                                            {detail.nameProduct}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="price-col">{detail.price}</td>
                                            <td className="price-col">{detail.priceSale}</td>
                                            <td className="price-col">{detail.quantity}</td>
                                            <td className="price-col">{detail.quantityReturn}</td>
                                            <td className="price-col">
                                                {(detail.price * (detail.quantity - detail.quantityReturn)) - detail.priceSale}
                                            </td>
                                        </tr>
                                    )
                                ))
                                : null
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DetailOrderView;
