import React, {useEffect} from 'react';
import CheckoutView from "../view/CheckoutView";
import $ from 'jquery'
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import OrderAPI from "../service/OrderAPI";
import swal from "sweetalert";

const CheckoutPage = (props) => {

    let history = useHistory();

    useEffect(() => {
        const checkLogin = () => {
            console.log("user: " + props.userLogin)
            if (props.userLogin == null || props.userLogin.trim() === '') {
                history.push("/login")
            }
        }
        checkLogin();
    }, []);


    const fnUseCodeVouher = () => {
        let code = document.getElementById('add-code-voucher-checkout').value
        if (code === null || code === undefined || code.trim() === '') {
            swal("Cảnh báo", "Mã giảm giá gồm các ký tự đọc được", "warning").then()
            console.log("Mã giảm giá không được để trống")
            return;
        }
        props.setCodeVoucher(code)
    }

    const fnSaveCheckout = async () => {
        let form = $('#id-form-checkout').serializeArray()
        let obj = {}
        for (let i = 0; i < form.length; i++) {
            obj[form[i].name] = form[i].value
        }
        obj['paymentMethod'] = $('.collapse.show')[0].id
        if (props.cart !== null && props.cart !== undefined && props.cart.length >= 0) {
            let arrCartFake = [props.cart.length];
            let indexArrCartFake = 0;
            for (let i = 0; i < props.cart.length; i++) {
                let objCartFake = {};
                objCartFake['idProduct'] = props.cart[i].product.id
                objCartFake['price'] = props.cart[i].product.price
                objCartFake['priceSale'] = 0
                objCartFake['quantity'] = props.cart[i].quantity
                arrCartFake[indexArrCartFake] = objCartFake
                ++indexArrCartFake
            }
            obj['details'] = arrCartFake
        }
        if (props.codeVoucher !== null && props.codeVoucher !== undefined) {
            obj['idVoucher'] = props.codeVoucher.id
            obj['codeVoucher'] = props.codeVoucher.code
            obj['priceVoucher'] = props.codeVoucher.priceSale
        }
        console.log(obj)
        await OrderAPI.save(obj)
            .then(s => {
                let {data} = s
                swal("Thành công", "Đã lưu hoá đơn mua hàng", "success").then(async t => {
                    props.setCart({});
                    if (data.paymentMethod === 'online') {
                        await OrderAPI.payment(data.id, 'http://localhost:3000').then(payment => {
                            window.location = payment.data
                        }).catch(e => {
                            swal("Thất bại", "Không thể thanh toán ngay lúc này. Vui lòng vào hoá đơn mua hàng và thanh toán lại~", "warning")
                        });
                    }
                    window.location = '/order.html'
                })
                console.log('Thêm hoá đơn thành công')
            })
            .catch(e => {
                swal("Thất bại", "Lưu hoá đơn mua hàng thất bại", "error")
                console.log('Thêm hoá đơn thất bại')
            });
    }

    const fnClickGetInfoCheckout = (e) => {
        if (e.target.checked) props.fnSetInfoCheckout()
    }

    return (
        <>
            <CheckoutView
                cart={props.cart}
                totalPriceCart={props.totalPriceCart}
                codeVoucher={props.codeVoucher}
                fnUseCodeVouher={fnUseCodeVouher}
                fnSaveCheckout={fnSaveCheckout}
                infoCheckout={props.infoCheckout}
                fnClickGetInfoCheckout={fnClickGetInfoCheckout}
            />
        </>
    );
};

export default CheckoutPage;
