import React, {useEffect, useState} from 'react';
import CardProductHome from "../layout/home/CardProductHome";

const WishlistPage = (props) => {

    const [listProductWishlist, setListProductWishlist] = useState([]);

    useEffect(() => {
        reloadListWishlist();
    }, []);

    useEffect(() => {
        reloadListWishlist();
    }, [props.listWishlist]);

    function reloadListWishlist() {
        let arrFake = [];
        props.listWishlist.forEach(wishlist => {
            props.listProducts.forEach(product => {
                if (product.id === wishlist.idProduct) {
                    arrFake.push(product)
                }
            })
        })
        setListProductWishlist(arrFake)
    }

    return (
        <>
            <div className="container">
                <h3 className="mt-2 card-title mb-6">Danh sách sản phẩm yêu thích</h3>
                <div className="row mb-3">
                    {
                        listProductWishlist !== null && listProductWishlist !== undefined ?
                            listProductWishlist.map((wishlist, index) => (
                                <CardProductHome
                                    fnAddCart={props.fnAddCart}
                                    fnWishlist={props.fnWishlist}
                                    product={wishlist}
                                    key={`wishlist${index}`}/>
                            )) : null
                    }
                </div>
            </div>
        </>
    );
};

export default WishlistPage;
