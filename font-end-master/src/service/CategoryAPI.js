import React from 'react';
import {ServerAPI} from "./AxiosAPI";

const CategoryAPI = {
    getAll() {
        let url = `/categories`
        return ServerAPI.get(url)
    }
}

export default CategoryAPI;
