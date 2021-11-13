import React from 'react';
import TopBarFooter from "./footer/TopBarFooter";
import ImageFooter from "./footer/ImageFooter";
import MidleFooter from "./footer/MidleFooter";
import BottomFooter from "./footer/BottomFooter";

const FooterDOM = () => {
    return (
        <>
            <footer className="footer footer-2">
                <TopBarFooter/>
                <ImageFooter/>
                <MidleFooter/>
                <BottomFooter/>
            </footer>
        </>
    );
};

export default FooterDOM;
