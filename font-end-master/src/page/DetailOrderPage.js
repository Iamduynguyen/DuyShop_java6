import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom/cjs/react-router-dom";
import swal from 'sweetalert'
import DetailOrderView from "../view/DetailOrderView";

const DetailOrderPage = (props) => {

    const [order, setOrder] = useState({});

    let {id} = useParams();

    let history = useHistory();

    useEffect(() => {
        if (props.listOrders !== null && props.listOrders !== undefined && props.listOrders.length > 0) {
            let orderFilter = props.listOrders.filter(e => e.id === id);
            if (orderFilter !== null && orderFilter !== undefined && orderFilter.length > 0) {
                setOrder(orderFilter[0]);
            } else {
                swal("Thông báo", "Hoá đơn không tồn tại", "warning").then(t => {
                    history.push("/order.html")
                })
            }
        } else {
            swal("Thông báo", "Hoá đơn không tồn tại", "warning").then(t => {
                history.push("/order.html")
            })
        }
    }, [id]);


    return (
        <>
            <DetailOrderView order={order}/>
        </>
    );
};

export default DetailOrderPage;
