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
                            swal("Th??nh c??ng", "S???n ph???m ???? th??m v??o danh s??ch y??u th??ch c???a b???n", "success").then()
                            props.setListWishlist([...props.listWishlist, objWishlist])
                        } else {
                            if (props.listWishlist !== null && props.listWishlist !== undefined) {
                                let arrWishlistFake = props.listWishlist.filter(e => e.idProduct !== objWishlist.idProduct)
                                swal("Th??nh c??ng", "???? xo?? s???n ph???m kh???i danh s??ch y??u th??ch c???a b???n", "success").then()
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
                swal("Th??nh c??ng", "B???n ???? th??m ????nh gi??", "success").then(t => {
                    window.location.reload()
                })
            })
            .catch(r => {
                console.log("Th??m review th???t b???i")
                if ((r + '').includes('500')) {
                    console.log("B???n ???? ????nh gi?? r???i")
                    swal('Th???t b???i', 'B???n ???? ????nh gi?? cho s???n ph???m n??y r???i', 'error')
                }else if ((r + '').includes('403') || (r + '').includes('404')) {
                    swal('Th???t b???i', 'Vui l??ng ????ng nh???p tr?????c khi g???i ????nh gi??', 'error').then(t => {
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
