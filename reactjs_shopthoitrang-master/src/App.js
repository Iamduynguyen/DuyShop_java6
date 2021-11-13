import { useState, useEffect } from "react";
import { add, getAll, remove, edit, getProductSearch, getAllSort,getAllRevert,getAllNext } from "./api/productAPI";
import Routes from "./Routes";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  // const API = "http://localhost:3003/";
  useEffect(() => {
    // fetch("http://localhost:3001/products/")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    //   .then((data) => setProducts(data));

    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (item) => {
    try {
      const { data } = await edit(item);
      console.log("app.js", data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  const onSearch = async (value) =>{
    const {data}= await getProductSearch(value);
    setProducts(data);
    console.log('0000',value);
  }
  const Sort=async()=>{
    const {data}= await getAllSort();
    setProducts(data);
    console.log('0000',data);
  }
  const Revert=async()=>{
    const {data}= await getAllRevert();
    setProducts(data);
    console.log('1111',data);
  }
  var index=0;
  const Next=async()=>{
    
    for (let index1=1; index1 < products.length; index1++) {
      return(
        <>
        {products[index1]}
        </>
      )
    //  index=index+1;
    // const {data} = await getAllNext(index);
    // setProducts(data);
    // console.log(index);
    // break;
    }
  }
  // const addToCart=(id)=>{
  //   console.log('0808',products.id);
  //   let Cart=null;
  //   let item={id:id}
  //   Cart=[item];
  //  let a = sessionStorage.setItem('addToCart',Cart)
    
  // }

  // const [page, setpage] = useState([])
  // // const [pagesize] = useState(8)
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const getPageProducts = async (page) => {
  //     if (page == null) {
  //       page = 1
  //     }
  //     try {
  //       const { data } = await getAllPage(page);
  //       setProducts(data);
  //       // console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getPageProducts(page)
  // }, [props]);

  return (
    <>
      <Routes
        
        data={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
        onSearch={onSearch}
        Sort={Sort}
        Revert={Revert}
        Next={Next}
        // addToCart={addToCart}
      />
    </>
  );
}
