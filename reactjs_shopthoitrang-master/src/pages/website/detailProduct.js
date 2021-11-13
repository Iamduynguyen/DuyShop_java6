import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {
  addCate,
  getAllCate,
  getAllCateLimit,
  removeCate,
  editCate,
} from "../../api/categoryAPI";
import {getCate} from "../../api/categoryAPI";
import {getAllLimit,get,getAll,getExpand, getAllCateIdNe} from "../../api/productAPI";
import "../../components/website/assets/css/fontawesome.min.css";
import "../../components/website/assets/css/custom.css";
import "../../components/website/assets/css/templatemo.css";
import "../../components/website/assets/css/bootstrap.min.css";
import "../../components/website/assets/img/favicon.ico";
import "../../components/website/assets/img/apple-icon.png";
import "../../pages/website/css/a.css";

export default function DetailProduct(props) {
  const { id } = useParams();
  console.log('id',id);
  console.log('props',props);

  
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();
  console.log('cateid',categoryId,id);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getAllCateIdNe(categoryId,id);
        setProduct(data);
        
        console.log('pro3',product);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProducts(data);
        console.log('pro2',products);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  const [cart, setCart] = useState([]);
  const addToCart=(id,name,price,image)=>{
    
    console.log('0909',id,name,price);
    const qty=1
    const item={
      id,
      name,
      price,
      image,
      qty
      
    };
     
    console.log('hhhh',item);
    // console.log('ccc',cart);
    // setCart(item);
    
    setCart([...cart,item])
    console.log('aaa',cart);
    // cart.push(item);
    
    const a=localStorage.setItem('addToCart',JSON.stringify(cart));
    const b=localStorage.getItem('addToCart')
    console.log('mmm',b);
    // setCart(...cart,[(item)])
    console.log('nbv',cart);
    alert('Thêm vào giỏ hàng thành công!');
  }
//   let a=sessionStorage.getItem('addToCart',cart);
//   useEffect(() => {
//     setCart(...cart,a)
// }, []);
  return (
    <>
  <section className="bg-light">
    <div className="container pb-5">
      <div className="row">
        <div className="col-lg-5 mt-5">
          <div className="card mb-3">
            <img className="card-img img-fluid" src={products.image} style={{width:'100%',height:'550px'}} alt="Card image cap" id="product-detail" />
          </div>
        </div>
        {/* col end */}
        <div className="col-lg-7 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="h2">{products.name}</h1>
              <p className="h3 py-2">{products.price}$</p>
              <p className="py-2">
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-secondary" />
                <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <h6>Trạng thái:</h6>
                </li>
                <li className="list-inline-item">
                  <p className="text-muted"><strong>{products.status==='true'?'Còn hàng' : 'Hết hàng'}</strong></p>
                </li>
              </ul>
              <h6>Description:</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <h6>Avaliable Color :</h6>
                </li>
                <li className="list-inline-item">
                  <p className="text-muted"><strong>White / Black</strong></p>
                </li>
              </ul>
              <h6>Specification:</h6>
              {/* <ul className="list-unstyled pb-3">
                <li>Lorem ipsum dolor sit</li>
                <li>Amet, consectetur</li>
                <li>Adipiscing elit,set</li>
                <li>Duis aute irure</li>
                <li>Ut enim ad minim</li>
                <li>Dolore magna aliqua</li>
                <li>Excepteur sint</li>
              </ul> */}
              <form action method="GET">
                <input type="hidden" name="product-title" defaultValue="Activewear" />
                {/* <div className="row">
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item">Size :
                        <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                      </li>
                      <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                      <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                      <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                      <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                    </ul>
                  </div>
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item text-right">
                        Quantity
                        <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                      </li>
                      <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                      <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                      <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                    </ul>
                  </div>
                </div> */}
                <div className="row pb-4 pt-4">
                  <div className="col d-grid">
                    <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                  </div>
                  <div className="col d-grid">
                    <button type="button" className="btn btn-success btn-lg" 
                    onClick={() =>addToCart(products.id,products.name,products.price,products.image)}
                    >Add To Cart</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Close Content */}
  {/* Start Article */}
  <section className="py-5">
    <div className="container">
      <div className="row text-center p-2 pb-4 splq fs-1">
        <h2>Related Products</h2>
      </div>
      {/*Start Carousel Wrapper*/}
      <div className="row">
      {product.map((item, index) => (
        <div className="col-md-3" key={index}>
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img className="card-img rounded-0 " src={item.image} width="250px" height="350px"/>
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart" /></a></li>
                  <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye" /></a></li>
                  <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus" /></a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
            <Link
                    to={`/detailProduct/${item.id}/categoryId/${item.category.id}`}
                    className="text-decoration-none text-dark mau-text"
                  >
                    
                    <span className="mau-text">{item.name}</span>
                    
                  </Link>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">{item.price}$</p>
            </div>
          </div>
        </div>
        ))}
        </div> 
    </div>
  </section>
  {/* End Article */}
</>
    );
}
