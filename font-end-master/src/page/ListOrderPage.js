import React from 'react';
import ListOrderView from "../view/ListOrderView";
import swal from 'sweetalert'
import OrderAPI from "../service/OrderAPI";

const ListOrderPage = (props) => {

    const fnTransports = (transport) => {
        console.log(transport)
        swal("Trạng thái vận chuyển", transport[transport.length - 1].statusTransport, "info")
    }

    const fnPaymentOrder = (order) => {
        console.log(order)
        swal({
            title: "Thanh toán?",
            text: "Xác nhận thanh toán hoá đơn trị giá " + order.totalPrice,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                await OrderAPI.payment(order.id, 'http://localhost:3000/order').then(s => {
                    window.location = s.data
                }).catch(e => {
                    swal("Thất bại", "Không thể thanh toán ngay lúc này.", "warning")
                });
                console.log('xác nhận')
            }
        });
    }

    return (
        <>
            <ListOrderView
                listOrders={props.listOrders}
                fnTransports={fnTransports}
                fnPaymentOrder={fnPaymentOrder}
            />
        </>
    );
};

export default ListOrderPage;
