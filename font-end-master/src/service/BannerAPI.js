import React from 'react';
import {ServerAPI} from "./AxiosAPI";

const BannerAPI = {
    getAll() {
        let url = `/banner`;
        return ServerAPI.get(url);
    }
};

export default BannerAPI;
