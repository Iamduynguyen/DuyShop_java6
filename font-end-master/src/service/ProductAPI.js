import {ServerAPI} from "./AxiosAPI";

const ProductAPI = {
    getAll() {
        let url = `/product`;
        return ServerAPI.get(url);
    },
    getFieldFilterById(id) {
        let url = `/product/${id}?field-filter`;
        return ServerAPI.get(url)
    },
    getPage(p, s) {
        let url = `/product?_p=${p}&_s=${s}`;
        return ServerAPI.get(url);
    },
    getPageAndSort(p, s, field, sort) {
        let url = `/product?_p=${p}&_s=${s}&_field=${field}&_sort=${sort}`;
        return ServerAPI.get(url);
    },
    search(value) {
        let url = `/product?_s=${value}`;
        return ServerAPI.get(url);
    },
    filterAndSort(value, p, s, field, sort) {
        let url ="";
        if (value === null || value === undefined || value === '') {
            url = `/product?p=${p}&s=${s}&field=${field}&sort=${sort}`;
        } else {
             url = `/product?${value}&p=${p}&s=${s}&field=${field}&sort=${sort}`;
        }
            return ServerAPI.get(url);
    },
    getById(id) {
        let url = `/product/${id}`;
        return ServerAPI.get(url);
    },
    saveReview(obj) {
        let url = `/reviews`
        return ServerAPI.post(url, obj);
    },
    filterAll(obj) {
        let url = `/product`;
        return ServerAPI.get(url, obj);
    },
    getByMostOrder() {
        let url = `/product/by-most-order`
        return ServerAPI.get(url)
    }
}

export default ProductAPI