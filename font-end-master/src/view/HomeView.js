import React from 'react';
import ListProductHome from "../layout/home/ListProductHome";
import ListProductByMostOrder from "../layout/home/ListProductByMostOrder";
import FourCategoriesHome from "../layout/home/FourCategoriesHome";
import BannerProductHome from "../layout/home/BannerProductHome";

const HomeView = (props) => {
    return (
        <>
            <BannerProductHome/>
            {/* End .bg-lighter */}
            <ListProductByMostOrder
                listProductOrderByMost={props.listProductOrderByMost}
                fnAddCart={props.fnAddCart}
                fnWishlist={props.fnWishlist}
            />
            <div>
                <FourCategoriesHome listCategories={props.listCategories}/>
                {/* End .container */}
                <div className="mb-5"/>
                {/* End .mb-6 */}
                <ListProductHome
                    listAllProducts={props.listAllProducts}
                    fnLoadMoreProduct={props.fnLoadMoreProduct}
                    fnAddCart={props.fnAddCart}
                    fnWishlist={props.fnWishlist}
                />
                {/* End .container */}
            </div>

        </>
    );
};

export default HomeView;
