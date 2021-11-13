import React from 'react';
import {ServerAPI} from "./AxiosAPI";
import {getSessionStorage} from "./UtilsAPI";

const OrderAPI = {
    getAllByUser() {
        let url = `/orders?single`;
        return ServerAPI.get(url);
    },
    getById(id) {
        let url = `/orders?id=${id}`;
        return ServerAPI.get(url);
    },
    add(obj) {
        let url = `/orders`
        return ServerAPI.post(url, obj)
    },
    update(obj) {
        let url = `/orders/${obj.id}`
        return ServerAPI.post(url, obj)
    },
    save(obj) {
        obj.idUser = getSessionStorage("id_user_login")
        let url = '/orders/checkout'
        return ServerAPI.post(url, obj);
    },
    findAllOrderByUserLogin() {
        let url = `/orders/get-by-user-login?id=${getSessionStorage("id_user_login")}`
        return ServerAPI.get(url);
    },
    payment(id, link) {
        let url = `/orders/payment`
        return ServerAPI.post(url, {id: id, url: link})
    }
};

export default OrderAPI;
