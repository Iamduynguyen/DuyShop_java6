import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MobileMenu from "./layout/MobileMenu";
import HeaderDOM from "./layout/Header";
import FooterDOM from "./layout/FooterDOM";
import HomePage from "./page/HomePage";
import ListProductPage from "./page/ListProductPage";
import DetailProductPage from "./page/DetailProductPage";
import ListOrderPage from "./page/ListOrderPage";
import DetailOrderPage from "./page/DetailOrderPage";
import ProfilePage from "./page/ProfilePage";
import EditProfilePage from "./page/EditProfilePage";
import SearchProductPage from "./page/SearchProductPage";
import NotFoundPage from "./page/NotFoundPage";
import CartPage from "./page/CartPage";
import CheckoutPage from "./page/CheckoutPage";
import LoginPage from "./page/LoginPage";
import LogoutPage from "./page/LogoutPage";
import WishlistPage from "./page/WishlistPage";
import ForgotPage from "./page/ForgotPage";

const RouterDOM = (props) => {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <HeaderDOM {...props}/>
                <main className="main">
                    <Switch>
                        <Route exact path={['/wishlist', '/wishlist.html']}>
                            <WishlistPage {...props}/>
                        </Route>
                        <Route exact path={['/cart', '/cart.html']}>
                            <CartPage {...props}/>
                        </Route>
                        <Route exact path={['/checkout', '/checkout.html']}>
                            <CheckoutPage {...props}/>
                        </Route>
                        <Route exact path={['/order', '/order.html']}>
                            <ListOrderPage {...props}/>
                        </Route>
                        <Route exact path={'/order/:id'}>
                            <DetailOrderPage {...props}/>
                        </Route>
                        <Route exact path={['/product', '/product.html', '/category/:idPath/:path']}>
                            <ListProductPage {...props}/>
                        </Route>
                        <Route exact path={'/product/:idPath/:path'}>
                            <DetailProductPage {...props}/>
                        </Route>
                        <Route exact path={'/search'}>
                            <SearchProductPage {...props}/>
                        </Route>
                        <Route exact path={['/profile', '/profile.html']}>
                            <ProfilePage {...props}/>
                        </Route>
                        <Route exact path={'/profile/edit/:username'}>
                            <EditProfilePage {...props}/>
                        </Route>
                        <Route exact path={['/login', '/login.html']}>
                            <LoginPage {...props}/>
                        </Route>
                        <Route exact path={['/logout', '/logout.html']}>
                            <LogoutPage {...props}/>
                        </Route>
                        <Route exact path={['/forgot-password', '/forgot-password.html']}>
                            <ForgotPage {...props}/>
                        </Route>
                        <Route exact path={['/', '/index.html']}>
                            <HomePage {...props}/>
                        </Route>
                        <Route path={'*'}>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                </main>
                <FooterDOM/>
                <button id="scroll-top" title="Back to Top">
                    <i className="icon-arrow-up"/>
                </button>
                <div className="mobile-menu-overlay"/>
                <MobileMenu/>
                />
            </div>
        </BrowserRouter>
    );
};

export default RouterDOM;
