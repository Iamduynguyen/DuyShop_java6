import React from 'react';
import {ServerAPI} from "./AxiosAPI";

const VoucherAPI = {
    getByCode(voucher) {
        let url = `/vouchers?code=${voucher.code}`
        return ServerAPI.get(url)
    }
}

export default VoucherAPI;
