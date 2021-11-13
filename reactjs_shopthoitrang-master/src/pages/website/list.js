import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addCate,
  getAllCate,
  getAllCateLimit,
  removeCate,
  editCate,
} from "../../api/categoryAPI";
import {getAllLimit,getAll} from "../../api/productAPI";

import image1 from "../../components/website/assets/img/banner_img_01.jpg";
import image2 from "../../components/website/assets/img/banner_img_02.jpg";
import image3 from "../../components/website/assets/img/banner_img_03.jpg";
import category1 from "../website/assets/img/category_img_01.jpg";
import "../../components/website/assets/css/fontawesome.min.css";
import "../../components/website/assets/css/custom.css";
import "../../components/website/assets/css/templatemo.css";
import "../../components/website/assets/css/bootstrap.min.css";
import "../../components/website/assets/img/favicon.ico";
import "../../components/website/assets/img/apple-icon.png";
import "../../pages/website/css/a.css";

export default function ListProductClient(props) {
  const [categories, setCategories] = useState([]);
  console.log("cate", categories);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCateLimit();
        setCategories(data);
        console.log('cate2',categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  const [products, setProducts] = useState([]);
  console.log("pro", products);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getAllLimit();
        setProducts(data);
        console.log('pro2',products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  
  return (
    <div>
      <div id="slider-wrapper">
        <div className="inner-wrapper">
          <input
            defaultChecked
            type="radio"
            name="slide"
            className="control"
            id="Slide1"
          />
          <label htmlFor="Slide1" id="s1" />
          <input type="radio" name="slide" className="control" id="Slide2" />
          <label htmlFor="Slide2" id="s2" />
          <input type="radio" name="slide" className="control" id="Slide3" />
          <label htmlFor="Slide3" id="s3" />

          <div className="overflow-wrapper ">
            <a className="slide btn-secondary" href>
              <span>
                <div className="col-lg-6 mb-0 d-flex align-items-center box">
                  <div className="text-align-left align-self-center a">
                    <h1 className="h1 text-success">
                      <b>Zay</b> Sport Shoes
                    </h1>
                    <h3 className="h2 ">Hot Spring 2021</h3>
                    <a href="#" className="btn btn-danger">
                      Collection
                    </a>
                  </div>
                </div>
                <img src={image1} />
              </span>
            </a>
            <a className="slide" href>
              <span>
                <div className="col-lg-6 mb-0 d-flex align-items-center box">
                  <div className="text-align-left align-self-center a">
                    <h1 className="h1 text-success">
                      <b>Zay</b> Sport Hairspray
                    </h1>
                    <h3 className="h2 ">Hot Summer 2021</h3>
                    <a href="#" className="btn btn-danger">
                      Collection
                    </a>
                  </div>
                </div>
                <img src={image2} />
              </span>
            </a>
            <a className="slide" href>
              <span>
                <div className="col-lg-6 mb-0 d-flex align-items-center box">
                  <div className="text-align-left align-self-center a">
                    <h1 className="h1 text-success">
                      <b>Zay</b> Sport Lamp
                    </h1>
                    <h3 className="h2 ">Hot Winter 2021</h3>
                    <a href="#" className="btn btn-danger">
                      Collection
                    </a>
                  </div>
                </div>
                <img src={image3} />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* End Banner Hero */}
      {/* Start Categories of The Month */}
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="row">
          {categories.map((item, index) => (
            <div className="col-12 col-md-4 p-5 mt-3 cate" key={index}>
              {/* <a href="">
               <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                </a> */}
              <a href="#">
                <img
                  src={item.image}
                  className="rounded-circle img-fluid border"
                  style={{ width: "100%", height: "65%" }}
                />
              </a>
              <h5 className="text-center mt-3 mb-3 fw-bold">{item.name}</h5>
              <p className="text-center">
                <Link to={`/shop/${item.id}`} className="btn btn-success">Go Shop</Link>
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* End Categories of The Month */}
      {/* <hr /> */}
      {/* Start Featured Product */}
      <section className=" mau-bg">
        <div className="container py-5 ">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            {products.map((item,index) =>(
              <div key={index} className="col-12 col-md-3 mb-4">
              <div className="card h-100 ">
                <a href="shop-single.html">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="..." style={{width:'100%',height:'350px'}}
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-muted fa fa-star" />
                      <i className="text-muted fa fa-star" />
                    </li>
                    <li className="text-muted text-right">{item.price}$</li>
                  </ul>
                  <Link to={`shop/category/${item.category.id}`} className="text-cate text-decoration-none">Danh mục: {item.category.name}</Link><br/>
                  <Link
                    to={`/detailProduct/${item.id}/categoryId/${item.category.id}`}
                    className="h2 text-decoration-none text-dark mau-text"
                  >
                    
                    <span className="mau-text">{item.name}</span>
                    
                  </Link>
                  
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>  
            ))}
          </div>
        </div>
      </section>
      {/* End Featured Product */}
    </div>
  );
}
