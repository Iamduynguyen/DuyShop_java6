import React from 'react';

const TopBarFooter = () => {
    return (
        <>
            <div className="icon-boxes-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-rocket"/>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Shipping</h3>{/* End .icon-box-title */}
                                    <p>orders $50 or more</p>
                                </div>
                                {/* End .icon-box-content */}
                            </div>
                            {/* End .icon-box */}
                        </div>
                        {/* End .col-sm-6 col-lg-3 */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
          <span className="icon-box-icon text-dark">
            <i className="icon-rotate-left"/>
          </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Returns</h3>{/* End .icon-box-title */}
                                    <p>within 30 days</p>
                                </div>
                                {/* End .icon-box-content */}
                            </div>
                            {/* End .icon-box */}
                        </div>
                        {/* End .col-sm-6 col-lg-3 */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
          <span className="icon-box-icon text-dark">
            <i className="icon-info-circle"/>
          </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Get 20% Off 1 Item</h3>{/* End .icon-box-title */}
                                    <p>When you sign up</p>
                                </div>
                                {/* End .icon-box-content */}
                            </div>
                            {/* End .icon-box */}
                        </div>
                        {/* End .col-sm-6 col-lg-3 */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
          <span className="icon-box-icon text-dark">
            <i className="icon-life-ring"/>
          </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">We Support</h3>{/* End .icon-box-title */}
                                    <p>24/7 amazing services</p>
                                </div>
                                {/* End .icon-box-content */}
                            </div>
                            {/* End .icon-box */}
                        </div>
                        {/* End .col-sm-6 col-lg-3 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </div>
            {/* End .icon-boxes-container */}

        </>
    );
};

export default TopBarFooter;
