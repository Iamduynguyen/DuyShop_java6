import React from 'react'
import Webfooter from '../component/website/footer'
import WebsiteHeader from '../component/website/header'


const Weblayout = ({children}) => {
    return (
        <div>
            <WebsiteHeader/>
            <main>
            {children}
            </main>
            <Webfooter/>
        </div>
    )
}

export default Weblayout

