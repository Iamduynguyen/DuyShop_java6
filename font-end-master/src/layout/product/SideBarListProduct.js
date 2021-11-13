import React from 'react';

const SideBarListProduct = ({listCategories, objFilter, fnFilterCategory}) => {
    return (
        <>
            <aside className="col-lg-3 order-lg-first">
                <form id={"form-filter-product"}>
                    <div className="sidebar sidebar-shop">
                        <div className="widget widget-clean">
                            <label>Filters:</label>
                            <a href="#" className="sidebar-filter-clear">Clean All</a>
                        </div>
                        {/* End .widget widget-clean */}
                        <div className="widget widget-collapsible">
                            <h3 className="widget-title">
                                <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true"
                                   aria-controls="widget-1">
                                    Loại sản phẩm
                                </a>
                            </h3>{/* End .widget-title */}
                            <div className="collapse" id="widget-1">
                                <div className="widget-body">
                                    <div className="filter-items filter-items-count">
                                        {
                                            listCategories.map((category, index) => (
                                                <div className="filter-item" key={index}>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               name="idCategory" id={category.id} value={category.id}
                                                               onChange={fnFilterCategory}/>
                                                        <label className="custom-control-label" htmlFor={category.id}>
                                                            {category.name}
                                                        </label>
                                                    </div>
                                                    {/* End .custom-checkbox */}
                                                    <span className="item-count">
                                                    {category.products != null ? category.products.length : ""}
                                                </span>
                                                </div>
                                            ))
                                        }
                                        {/* End .filter-item */}
                                    </div>
                                    {/* End .filter-items */}
                                </div>
                                {/* End .widget-body */}
                            </div>
                            {/* End .collapse */}
                        </div>
                        {/* End .widget */}
                        <div className="widget widget-collapsible">
                            <h3 className="widget-title">
                                <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true"
                                   aria-controls="widget-4">
                                    Màu sắc
                                </a>
                            </h3>{/* End .widget-title */}
                            <div className="collapse" id="widget-4">
                                <div className="widget-body">
                                    <div className="filter-items">
                                        {
                                            objFilter !== null && objFilter !== undefined ?
                                                objFilter.color !== null && objFilter.color !== undefined && objFilter.color.length > 0 ?
                                                    objFilter.color.map((color, index) => (
                                                        <div className="filter-item" key={index}>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                       id={color}/>
                                                                <label className="custom-control-label" htmlFor={color}>
                                                                    {color}
                                                                </label>
                                                            </div>
                                                            {/* End .custom-checkbox */}
                                                        </div>
                                                    )) : ""
                                                : ""
                                        }
                                    </div>
                                    {/* End .filter-items */}
                                </div>
                                {/* End .widget-body */}
                            </div>
                            {/* End .collapse */}
                        </div>
                        {/* End .widget */}
                        <div className="widget widget-collapsible">
                            <h3 className="widget-title">
                                <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true"
                                   aria-controls="widget-5">
                                    Giá
                                </a>
                            </h3>{/* End .widget-title */}
                            <div className="collapse" id="widget-5">
                                <div className="widget-body">
                                    <div className="filter-price">
                                        <div className="filter-price-text">
                                            Khoảng giá:
                                            <span id="filter-price-range"/>
                                        </div>
                                        <div id="price-slider" data-min="1000" data-max="1000000"/>
                                        {/* End .filter-price-text */}
                                        {
                                            objFilter !== null && objFilter !== undefined ?
                                                <div id="price-slider" data-min={objFilter.min}
                                                     data-max={objFilter.max}/>
                                                : ""
                                        }
                                        {/* End #price-slider */}
                                    </div>
                                    {/* End .filter-price */}
                                </div>
                                {/* End .widget-body */}
                            </div>
                            {/* End .collapse */}
                        </div>
                        {/* End .widget */}
                    </div>
                    {/* End .sidebar sidebar-shop */}
                </form>
            </aside>
            {/* End .col-lg-3 */}
        </>
    );
};

export default SideBarListProduct;
