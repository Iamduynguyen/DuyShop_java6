import React, {useEffect, useState} from 'react';
import ListProductView from "../view/ListProductView";
import {useParams} from "react-router-dom";
import $ from 'jquery'
import ProductAPI from "../service/ProductAPI";

const ListProductPage = (props) => {

    let {idPath, path} = useParams();

    const [listProducts, setListProducts] = useState([]);

    const [numberPageNow, setNumberPageNow] = useState(0);

    const [fieldSort, setFieldSort] = useState("created");

    const [typeSort, setTypeSort] = useState("desc");

    useEffect(() => {
        fnLoadProduct().then()
    }, []);

    useEffect(() => {
        fnLoadProduct().then()
    }, [numberPageNow, fieldSort, typeSort]);

    const fnLoadProduct = async () => {
        let getSerialize = $('#form-filter-product').serialize()
        await ProductAPI.filterAndSort(getSerialize, numberPageNow, 9, fieldSort, typeSort)
            .then(s => {
                let {data} = s
                setListProducts([...data])
                if (data.length < 9) {
                    let idBtnLoadMoreProduct = $('#load-more-list-product')
                    idBtnLoadMoreProduct[0].hidden = true
                }
            }).catch(e => {
                console.log("Không đọc được dữ liệu list product page: " + numberPageNow)
            })
    }

    const fnAddCart = (product) => {
        let quantity = 1
        props.fnAddCart(quantity, product)
    }

    const fnFieldSort = async (e) => {
        let _type = e.target.value
        setFieldSort("price")
        setTypeSort(_type);
        if (_type === "date_desc") {
            setFieldSort("created");
            setTypeSort("desc")
        } else if (_type === "desc") {
            setFieldSort("price")
        } else if (_type === "asc") {
            setFieldSort("price")
        }
    }

    const fnFilterCategory = async () => {
        fnLoadProduct().then()
    }

    return (
        <>
            <ListProductView
                listProducts={listProducts}
                listCategories={props.listCategories}
                objFilter={props.objFilter}
                fnAddCart={fnAddCart}
                fnFilterCategory={fnFilterCategory}
                fnFieldSort={fnFieldSort}
            />
        </>
    );
};

export default ListProductPage;
