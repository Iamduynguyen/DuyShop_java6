import React from 'react';
import {LoginAPI, ServerAPI} from "./AxiosAPI";
import {getSessionStorage} from "./UtilsAPI";

const UserAPI = {
    login(username, password) {
        let url = `/login`
        return LoginAPI.post(url, `username=${username}&password=${password}`)
    },
    getById(id) {
        let url = `/users/${id}`
        return ServerAPI.get(url)
    },
    add(obj) {
        let url = `/users`
        return ServerAPI.post(url, obj)
    },
    update(obj) {
        let url = `/users/${obj.id}`;
        return ServerAPI.get(url, obj)
    },
    changePassword(oldPassword, newPassword) {
        let url = `/users/change-password`
        return ServerAPI.post(url, {newPassword: newPassword, oldPassword: oldPassword})
    },
    checkLogin() {
        return ServerAPI.get("token/refresh");
    },
    getInfoCheckout() {
        let url = "/users/get-info-checkout?id=" + getSessionStorage("id_user_login")
        return ServerAPI.get(url);
    },
    getIdByUsernameLogin(userLogin) {
        let url = `/users/get-id-by-user-login?username=${userLogin}`
        return ServerAPI.get(url);
    },
    register(obj) {
        let url = `/users/register`
        return ServerAPI.post(url, obj);
    }
};

export default UserAPI;
