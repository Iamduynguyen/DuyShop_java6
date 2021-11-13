import axios from "axios";
import {getSessionStorage} from "./UtilsAPI";

export const ServerAPI = axios.create({
    baseURL: 'http://localhost:8091/api',
    headers: {
        'Authorization': getSessionStorage("access_token") === null || getSessionStorage("access_token") === undefined
            ? '' : 'Bearer ' + getSessionStorage("access_token"),
        'Content-Type': 'application/json'
    },
});

export const LoginAPI = axios.create({
    baseURL: 'http://localhost:8091/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});