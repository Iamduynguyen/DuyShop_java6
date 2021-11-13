import React, {useEffect, useState} from 'react';
import DetailProductView from "../view/DetailProductView";
import {useParams} from "react-router-dom";
import {WishlistAPI} from "../service/WishlistAPI";
import ProductAPI from "../service/ProductAPI";
import ServiceAPI from "../service/ServiceAPI";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import swal from 'sweetalert'

const DetailsProductPage = (props) => {

    const [product, setProduct] = useState({});

    const [listProductOfCategory, setListProductOfCategory] = useState([]);

    const [wishList, setWishList] = useState(false);

    let history = useHistory();

    let nameFile = '';

    let {idPath, path} = useParams();

    useEffect(() => {
        if (idPath !== null && idPath !== undefined && path !== null && path !== undefined) {
            props.listProducts.map(product => product.idPath === Number(idPath) && product.path === path ? setProduct(product) : null)
        }
    }, [idPath, path, props.listProducts]);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        if (props.listProducts !== null && props.listProducts !== undefined) {
            let arrFake = props.listProducts.filter(e => e.idCategory === product.idCategory)
            setListProductOfCategory([...listProductOfCategory, ...arrFake])
        }
        if (props.listWishlist !== null && props.listWishlist !== undefined) {
            let objFake = props.listWishlist.filter(e => e.idProduct === product.id);
            if (objFake !== null && objFake !== undefined && objFake.length > 0) {
                setWishList(true)
            }
        }
    }, [product, props.listWishlist]);

    const fnAddCart = () => {
        let quantity = document.getElementById('qty').value
        props.fnAddCart(quantity, product)
    }

    const fnWishlist = () => {
        if (props.userLogin !== null && props.userLogin !== undefined && props.userLogin !== '') {
            let objWishlist = {idProduct: product.id}
            WishlistAPI.update(objWishlist)
                .then(r => {
                        setWishList(!wishList)
                        if (r.data) {
                            swal("Thành công", "Sản phẩm đã thêm vào danh sách yêu thích của bạn", "success").then()
                            props.setListWishlist([...props.listWishlist, objWishlist])
                        } else {
                            if (props.listWishlist !== null && props.listWishlist !== undefined) {
                                let arrWishlistFake = props.listWishlist.filter(e => e.idProduct !== objWishlist.idProduct)
                                swal("Thành công", "Đã xoá sản phẩm khỏi danh sách yêu thích của bạn", "success").then()
                                props.setListWishlist(arrWishlistFake);
                            }
                        }
                    }
                );
        } else {
            history.push("/login")
        }
    }

    const fnReviewProduct = async (value) => {
        value.idProduct = product.id
        value.point = Number(value.point) * 20
        value.introduce = false
        if (nameFile !== null && nameFile !== undefined && nameFile !== '') {
            value.images = [nameFile]
        }
        await ProductAPI.saveReview(value)
            .then(s => {
                swal("Thành công", "Bạn đã thêm đánh giá", "success").then(t => {
                    window.location.reload()
                })
            })
            .catch(r => {
                console.log("Thêm review thất bại")
                if ((r + '').includes('500')) {
                    console.log("Bạn đã đánh giá rồi")
                    swal('Thất bại', 'Bạn đã đánh giá cho sản phẩm này rồi', 'error')
                }else if ((r + '').includes('403') || (r + '').includes('404')) {
                    swal('Thất bại', 'Vui lòng đăng nhập trước khi gửi đánh giá', 'error').then(t => {
                        history.push("/login")
                    })
                }
            })
    }

    const fnUploadFile = async (e) => {
        if (e.target.files && e.target.files[0]) {
            let data = await ServiceAPI.toBase64(e.target.files[0])
            let base = data.substring(data.indexOf(",") + 1, data.length)
            nameFile = ServiceAPI.convertNameFile(e.target.files[0].name)
            await ServiceAPI.saveToGit(base, nameFile)
            document.getElementById('img-review-upload').src = data
        }
    }

    return (
        <>
            <DetailProductView
                product={product}
                listProductOfCategory={listProductOfCategory}
                fnAddCart={fnAddCart}
                fnWishlist={fnWishlist}
                wishlist={wishList}
                userLogin={props.userLogin}
                fnReviewProduct={fnReviewProduct}
                fnUploadFile={fnUploadFile}
            />
        </>
    );
};

export default DetailsProductPage;
