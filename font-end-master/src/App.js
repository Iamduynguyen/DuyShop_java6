import RouterDOM from "./Router";
import React, {useEffect, useState} from 'react';
import ProductAPI from "./service/ProductAPI";
import {
    getLocalStorage,
    removeSessionStorage,
    saveLocalStorage,
    saveSessionStorage
} from "./service/UtilsAPI";
import BannerAPI from "./service/BannerAPI";
import CategoryAPI from "./service/CategoryAPI";
import VoucherAPI from "./service/VoucherAPI";
import UserAPI from "./service/UserAPI";
import OrderAPI from "./service/OrderAPI";
import jwt_decode from "jwt-decode";
import {WishlistAPI} from "./service/WishlistAPI";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import swal from "sweetalert"

const App = () => {

    let history = useHistory();

    const [codeVoucher, setCodeVoucher] = useState({id: null, code: "", priceSale: 0});

    const [cart, setCart] = useState([]);

    const [totalPriceCart, setTotalPriceCart] = useState(0);

    const [listProducts, setListProducts] = useState([]);

    const [listCategories, setListCategories] = useState([]);

    const [listOrders, setListOrders] = useState([]);

    const [userLogin, setUserLogin] = useState();

    const [infoCheckout, setInfoCheckout] = useState({fullName: "", phoneNumber: "", email: ""});

    const [listWishlist, setListWishlist] = useState([]);

    useEffect(() => {
        const getAccesstoken = async () => {
            await UserAPI.checkLogin()
                .then(s => {
                    let {access_token} = s.data;
                    saveSessionStorage("access_token", access_token);
                    setUserLogin(jwt_decode(access_token).sub)
                })
                .catch(e => {
                    // swal("Thất bại", "Xác nhận đăng nhập không thành công", "error")
                    console.log('Xác nhận accesstoen thất bại')
                })
        }
        getAccesstoken().then(r => null);
        const getListProduct = async () => {
            await ProductAPI.getAll()
                .then(s => {
                    let {data} = s
                    setListProducts(data)
                }).catch(e => {
                    console.log("Không thể đọc danh sách sản phẩm")
                });
        }
        getListProduct().then(r => null);
        const getListCategories = async () => {
            try {
                let {data} = await CategoryAPI.getAll();
                setListCategories(data)
            } catch (e) {
                console.log("Không thể đọc danh sách loại sản phẩm")
            }
        }
        getListCategories().then(r => null)
    }, []);

    useEffect(() => {
        const getCartStorage = () => {
            let cartStorage = getLocalStorage("cart_storage")
            let cartFake = [];
            if (listProducts !== null && listProducts !== undefined
                && cartStorage !== null && cartStorage !== undefined && cartStorage.length > 0) {
                listProducts.forEach(product => {
                    cartStorage.forEach(cart => {
                        if (product.id === cart.product.id) {
                            cartFake.push({
                                product: {
                                    id: product.id,
                                    name: product.name,
                                    idPath: product.idPath,
                                    path: product.path,
                                    price: product.price,
                                    image: product.images !== null && product.images !== undefined && product.images.length > 0
                                        ? product.images[0].path : ""
                                },
                                quantity: cart.quantity
                            })
                        }
                    })
                })
            }
            setCart(cartFake)
        }
        getCartStorage()
    }, [listProducts]);


    useEffect(() => {
        if (cart !== null && cart !== undefined && cart.length >= 0) {
            fnSetCoceVoucher(codeVoucher).then(r => null)
        }
    }, [cart]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        if (userLogin !== null && userLogin !== undefined && userLogin.trim() !== '') {
            await OrderAPI.findAllOrderByUserLogin()
                .then(s => {
                    let {data} = s;
                    console.log("order")
                    console.log(data)
                    setListOrders(data)
                }).catch(e => {
                    console.log('lỗi get list order')
                })
            await WishlistAPI.findAllWishlistByUserLogin()
                .then(s => {
                    let {data} = s
                    setListWishlist(data)
                }).catch(e => {
                    console.log(' lỗi get list wishlist')
                })
            await UserAPI.getIdByUsernameLogin(userLogin)
                .then(s => {
                    let {data} = s;
                    saveSessionStorage("id_user_login", data)
                }).catch(e => {
                    console.log('Lỗi get id')
                })
        }
    }, [userLogin]);

    const fnSetLogin = async (username, password) => {
        await UserAPI.login(username, password)
            .then(s => {
                let {access_token} = s.data
                setUserLogin(username)
                saveSessionStorage("access_token", access_token)
                swal("", "Đăng nhập thành công", "success").then(s => {
                    window.location = '/index.html'
                })
                console.log('Đăng nhập thành công')
                return true;
            })
            .catch(e => {
                removeSessionStorage("access_token")
                setUserLogin("")
                console.log("remove token")
                return false;
            })
    }

    const fnSetInfoCheckout = async () => {
        await UserAPI.getInfoCheckout().then(s => {
            let {data} = s
            console.log('đã lấy dữ liệu checkout')
            setInfoCheckout(data);
        }).catch(e => {
            console.log('get info checkkout error')
        });
    }

    const fnSetCoceVoucher = async (voucher) => {
        if (voucher !== null && voucher !== undefined
            && voucher.code !== null && voucher.code !== undefined && voucher.code !== '') {
            await VoucherAPI.getByCode(voucher).then(s => {
                let {data} = s
                setCodeVoucher(data)
                let total = cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0)
                let result = Number(total) - Number(data.priceSale)
                if (Number(Number(total) - Number(data.priceSale)) < 0) {
                    result = 0;
                }
                setTotalPriceCart(result)
                swal("Thành công", "Đã áp dụng mã giảm giá", "success")
                return true;
            }).catch(e => {
                swal("Thất bại", "Mã giảm giá không tồn tại", "warning")
                console.log("Mã giảm giá không tồn tại")
                let total = cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0)
                setTotalPriceCart(Number(total))
                setCodeVoucher({id: null, code: "", priceSale: 0})
            })
        } else {
            let total = cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0)
            setTotalPriceCart(Number(total))
            setCodeVoucher({id: null, code: "", priceSale: 0})
        }
    }

    console.log(codeVoucher)

    const fnSetCart = (obj) => {
        saveLocalStorage("cart_storage", obj);
        setCart(obj);
        fnSetCoceVoucher(codeVoucher).then(r => null)
    }

    const fnAddCart = (quantity, product) => {
        let objCart = cart;
        let objNewCart = {
            product:
                {
                    id: product.id,
                    name: product.name,
                    idPath: product.idPath,
                    path: product.path,
                    price: product.price,
                    image: product.images !== null && product.images !== undefined && product.images.length > 0
                        ? product.images[0].path : ""
                }
            , quantity: Number(quantity)
        }
        if (objCart !== null && objCart !== undefined) {
            if (objCart.length > 0) {
                for (let i = 0; i < objCart.length; i++) {
                    if (objCart[i].product.id !== null && objCart[i].product.id !== undefined && objCart[i].product.id === product.id) {
                        quantity = Number(objCart[i].quantity) + Number(quantity);
                        if (Number(objCart[i].quantity) >= 10) {
                            swal("Cảnh báo", "Bạn chỉ có thể thêm vào giỏ hàng tối đa mỗi sản phẩm 10 đơn vị", "warning").then()
                            console.log('Số lượng đã đạt tối đa')
                            return;
                        }
                        if (Number(quantity) > 10) {
                            quantity = 10
                        }
                        objCart[i].quantity = quantity
                        fnSetCart(objCart);
                        swal("Thành công", "Đã thêm giỏ hàng", "success").then()
                        console.log('Lưu thành công')
                        return;
                    }
                }
                let objFake = [...objCart, objNewCart]
                fnSetCart(objFake);
                return;
            }
        }
        let objFake = [objNewCart]
        fnSetCart(objFake);
        swal("Thành công", "Đã thêm giỏ hàng", "success").then()
        console.log('Lưu thành công')
    }

    const fnWishlist = (product) => {
        if (userLogin !== null && userLogin !== undefined && userLogin !== '') {
            let objWishlist = {idProduct: product.id}
            WishlistAPI.update(objWishlist)
                .then(r => {
                        if (r.data) {
                            setListWishlist([...listWishlist, objWishlist])
                            swal("Thành công", "Sản phẩm đã thêm vào danh sách yêu thích của bạn", "success").then()
                            console.log("Đã thêm yêu thích")
                        } else {
                            if (listWishlist !== null && listWishlist !== undefined) {
                                let arrWishlistFake = listWishlist.filter(e => e.idProduct !== objWishlist.idProduct)
                                setListWishlist(arrWishlistFake);
                            }
                            swal("Thành công", "Đã xoá sản phẩm khỏi danh sách yêu thích của bạn", "success").then()
                            console.log("Đã huỷ yêu thích")
                        }
                    }
                )
        } else {
            swal("Thất bại", "Vui lòng đăng nhập", "warning").then(s => {
                window.location = '/login'
            })
        }
    }

    return (
        <>
            <RouterDOM
                listProducts={listProducts}
                setListProducts={setListProducts}
                listCategories={listCategories}
                cart={cart}
                fnAddCart={fnAddCart}
                setCart={fnSetCart}
                totalPriceCart={totalPriceCart}
                setCodeVoucher={fnSetCoceVoucher}
                codeVoucher={codeVoucher}
                userLogin={userLogin}
                fnSetLogin={fnSetLogin}
                infoCheckout={infoCheckout}
                fnSetInfoCheckout={fnSetInfoCheckout}
                listWishlist={listWishlist}
                setListWishlist={setListWishlist}
                listOrders={listOrders}
                setListOrders={setListOrders}
                fnWishlist={fnWishlist}
            />
        </>
    );
};

export default App;

