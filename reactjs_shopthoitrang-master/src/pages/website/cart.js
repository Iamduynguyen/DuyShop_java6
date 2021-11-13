import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { signin } from "../../api/authAPI";
import { isAuthenticated, authenticate } from "../../auth";
import "../../pages/website/css/user.css";
import { Link } from "react-router-dom";
import "./css/cart.css";
import "../../pages/website/assets/css/fontawesome.css"
const Cart = () => {
  // const [cart,setCart] =useState([]);
    const a=localStorage.getItem('addToCart');
    const carts=JSON.parse(a);
    // setCart(a)
    // let cart=Array(a);
    // cart.splice(',');
    console.log('cart2',carts);
    const RemoveLocal =(id)=>{
      localStorage.removeItem('addToCart');
      
    }
  return (
    <div className="container mt-6 p-3 rounded cart" style={{marginTop:'150px',marginBottom:'100px '}}>
  <div className="row no-gutters">
    <div className="col-md-8">
      <div className="product-details mr-2">
        <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left" /><span className="ml-2">Continue Shopping</span></div>
        {/* <div className="d-flex flex-row " style={{textAlign:"right"}}><span className=" btn btn-danger btn-sm ms-1" onClick={()=>RemoveLocal()}>Xóa</span></div> */}
        <hr />
        <h6 className="mb-0">Shopping cart</h6>
        <div className="d-flex justify-content-between">
          {/* <span>You have 4 items in your cart</span> */}
          {/* <div className="d-flex flex-row align-items-center"><span className="text-black-50">Sort by:</span>
            <div className="price ml-2"><span className="mr-1">price</span><i className="fa fa-angle-down" /></div>
          </div> */}
        </div>
        
        {carts && carts.map((item,index)=>(
        <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row" style={{marginRight:'10px'}}><img className="rounded" src={item.image} width={40} />
                
            <div className="ml-2 pt-2"><span className="font-weight-bold d-block">{item.name}</span></div>
          </div>  
          <div className="d-flex flex-row" style={{textAlign:'right'}}>Qty: {item.qty}</div>
          <div className="d-flex flex-row align-items-center">
            <span className="d-block ml-5 font-weight-bold">{item.price}$</span>
            {/* <i className="fa fa-trash-o ml-3 text-black-50" /> */}
            <span className="btn btn-danger btn-sm ms-1" onClick={()=>RemoveLocal(item.id)}>Xóa</span>
          </div>
        </div>
        ))}
        {/* <div style={{textAlign:'right',marginTop:'10px'}}>Tottal: $</div> */}
      </div>
    
    </div>
    <div className="col-md-4">
      <div className="payment-info">
        <div className="d-flex justify-content-between align-items-center"><span>Card details</span><img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width={30} /></div><span className="type d-block mt-3 mb-1">Card type</span><label className="radio"> <input type="radio" name="card" defaultValue="payment" defaultChecked /> <span><img width={30} src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>
        <label className="radio"> <input type="radio" name="card" defaultValue="payment" /> <span><img width={30} src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>
        <label className="radio"> <input type="radio" name="card" defaultValue="payment" /> <span><img width={30} src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>
        <label className="radio"> <input type="radio" name="card" defaultValue="payment" /> <span><img width={30} src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
        <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name" /></div>
        <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" /></div>
        <div className="row">
          <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
          <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder={342} /></div>
        </div>
        <hr className="line" />
        <div className="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div>
        <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div>
        <div className="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$3020.00</span></div><button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>$3020.00</span><span>Checkout<i className="fa fa-long-arrow-right ml-1" /></span></button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Cart;
